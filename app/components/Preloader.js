import gsap from "gsap";
import Component from "classes/Component";
import each from "lodash/each";

import { split } from "utils/text";

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        title: ".preloader_text",
        circle: ".preloader_number",
        selector: ".fadeOutSelector",
        number: "#number",
        images: document.querySelectorAll("img"),
      },
    });
    split({
      element: this.elements.title,
      expression: "<br>",
    });

    this.elements.titleSpans =
      this.elements.title.querySelectorAll("span span");
    this.length = 0;

    this.createLoader();
  }
  createLoader() {
    each(this.elements.images, (element) => {
      element.onload = this.onAssetLoaded(element);
      element.src = element.getAttribute("data-src");
    });
  }
  onAssetLoaded(image) {
    this.length += 1;
    const precent = this.length / this.elements.images.length;
    this.elements.number.innerHTML = `${Math.round(precent * 100)}`;
    if (precent === 1) {
      this.onLoaded();
    }
  }
  onLoaded() {
    return new Promise((resolve) => {
      this.emit("completed");
      this.animationOut = gsap.timeline({
        delay: 2,
      });

      this.animationOut.to(
        this.elements.number,
        {
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.1,
          y: "150%",
        },
        "-=1.4"
      );
      this.animationOut.to(this.elements.selector, {
        opacity: 0,
        stagger: 0.3,
      });
      this.animationOut.to(this.elements.circle, {
        width: 0,
        height: 0,
        ease: "expo.out",
      });

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        duration: 1.5,
      });
      this.animationOut.call((_) => {
        this.destroy();
      });
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}
