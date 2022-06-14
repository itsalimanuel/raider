/*! For license information please see main.ef2eb0b6c1ed39336d1f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateraider("main",{"./app/pages/Home/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>M});var i=s("./app/classes/Page.js"),a=s("./node_modules/ogl/src/core/Renderer.js"),r=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./node_modules/ogl/src/extras/Plane.js"),d=s("./node_modules/normalize-wheel/index.js"),h=s.n(d),l=s("./node_modules/lodash/debounce.js"),c=s.n(l),m=s("./app/pages/Home/utils/math.js"),u=s("./app/pages/Home/images/carbon.webp"),g=s("./app/pages/Home/images/choose.jpg"),p=s("./app/pages/Home/images/ppl.png"),w=s("./app/pages/Home/images/Ferrum.jpg");Object(function(){var e=new Error("Cannot find module './Medical.jpg'");throw e.code="MODULE_NOT_FOUND",e}());var f=s("./app/pages/Home/images/1.jpg"),v=s("./app/pages/Home/images/2.jpg"),b=s("./app/pages/Home/images/3.jpg"),x=s("./app/pages/Home/images/4.jpg"),j=(s("./app/pages/Home/images/5.jpg"),s("./app/pages/Home/Media.js")),E=s("./app/pages/Home/Background.js");class M extends i.default{constructor(){super({id:"home",element:".home"}),document.documentElement.classList.remove("no-js"),this.scroll={ease:.05,current:0,target:0,last:0},this.onCheckDebounce=c()(this.onCheck,200),this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createGeometry(),this.createMedias(),this.createBackground(),this.update(),this.addEventListeners(),this.createPreloader()}createPreloader(){Array.from(this.mediasImages).forEach((({image:e})=>{const t=new Image;this.loaded=0,t.src=e,t.onload=e=>{this.loaded+=1,this.loaded===this.mediasImages.length&&(document.documentElement.classList.remove("loading"),document.documentElement.classList.add("loaded"))}}))}createRenderer(){this.renderer=new a.Renderer,this.gl=this.renderer.gl,this.gl.clearColor(.79607843137,.79215686274,.74117647058,1),document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new r.Camera(this.gl),this.camera.fov=45,this.camera.position.z=20}createScene(){this.scene=new o.Transform}createGeometry(){this.planeGeometry=new n.Plane(this.gl,{heightSegments:50,widthSegments:100})}createMedias(){this.mediasImages=[{image:u.default,text:"Carbon Mobile",url:"/d"},{image:g.default,text:"Choose",url:"/d"},{image:p.default,text:"Media PPL"},{image:w.default,text:"Ferrum Panel",url:"/d"},{image:Object(function(){var e=new Error("Cannot find module './Medical.jpg'");throw e.code="MODULE_NOT_FOUND",e}()),text:"Medical Smart",url:"/d"},{image:f.default,text:"Saghiry",url:"/d"},{image:v.default,text:"Glav Pitomnik",url:"/d"},{image:b.default,text:"Rubin",url:"/d"},{image:x.default,text:"Dima Dom",url:"/d"},{image:u.default,text:"Carbon Mobile",url:"/d"},{image:g.default,text:"Choose",url:"/d"},{image:p.default,text:"Media PPL",url:"/d"},{image:w.default,text:"Ferrum Panel",url:"/d"},{image:Object(function(){var e=new Error("Cannot find module './Medical.jpg'");throw e.code="MODULE_NOT_FOUND",e}()),text:"Medical Smart",url:"/d"},{image:f.default,text:"Saghiry",url:"/d"},{image:v.default,text:"Glav Pitomnik",url:"/d"},{image:b.default,text:"Rubin",url:"/d"},{image:x.default,text:"Dima Dom",url:"/d"}],console.log(this.mediasImages),this.medias=this.mediasImages.map((({image:e,text:t,url:s},i)=>new j.default({geometry:this.planeGeometry,gl:this.gl,image:e,index:i,length:this.mediasImages.length,renderer:this.renderer,scene:this.scene,screen:this.screen,text:t,url:s,viewport:this.viewport})))}createBackground(){this.background=new E.default({gl:this.gl,scene:this.scene,viewport:this.viewport})}onTouchDown(e){this.isDown=!0,this.scroll.position=this.scroll.current,this.start=e.touches?e.touches[0].clientX:e.clientX}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=.01*(this.start-t);this.scroll.target=this.scroll.position+s}onTouchUp(e){this.isDown=!1,this.onCheck()}onWheel(e){const t=h()(e).pixelY;this.scroll.target+=.005*t,this.onCheckDebounce()}onCheck(){const{width:e}=this.medias[0],t=e*Math.round(Math.abs(this.scroll.target)/e);this.scroll.target<0?this.scroll.target=-t:this.scroll.target=t}onResize(){this.screen={height:window.innerHeight,width:window.innerWidth},this.renderer.setSize(this.screen.width,this.screen.height),this.camera.perspective({aspect:this.gl.canvas.width/this.gl.canvas.height});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.viewport={height:t,width:s},this.medias&&this.medias.forEach((e=>e.onResize({screen:this.screen,viewport:this.viewport})))}update(){this.scroll.current=(0,m.lerp)(this.scroll.current,this.scroll.target,this.scroll.ease),this.scroll.current>this.scroll.last?this.direction="right":this.direction="left",this.medias&&this.medias.forEach((e=>e.update(this.scroll,this.direction))),this.background&&this.background.update(this.scroll,this.direction),this.renderer.render({scene:this.scene,camera:this.camera}),this.scroll.last=this.scroll.current,window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("wheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this))}}}},(function(e){e.h=()=>"95ee95b477011b24e4e1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixVQUFVd0IsS0FBS3pHLHdCQy9QNUQyRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFpZGVyLy4vYXBwL3BhZ2VzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmFpZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZSBmcm9tIFwiY2xhc3Nlcy9QYWdlXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyLCBDYW1lcmEsIFRyYW5zZm9ybSwgUGxhbmUgfSBmcm9tIFwib2dsXCI7XHJcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCI7XHJcblxyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC9kZWJvdW5jZVwiO1xyXG5pbXBvcnQgeyBsZXJwIH0gZnJvbSBcIi4vdXRpbHMvbWF0aFwiO1xyXG5cclxuaW1wb3J0IEltYWdlMSBmcm9tIFwiLi9pbWFnZXMvY2FyYm9uLndlYnBcIjtcclxuaW1wb3J0IEltYWdlMiBmcm9tIFwiLi9pbWFnZXMvY2hvb3NlLmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2UzIGZyb20gXCIuL2ltYWdlcy9wcGwucG5nXCI7XHJcbmltcG9ydCBJbWFnZTQgZnJvbSBcIi4vaW1hZ2VzL0ZlcnJ1bS5qcGdcIjtcclxuaW1wb3J0IEltYWdlNSBmcm9tIFwiLi9NZWRpY2FsLmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2U2IGZyb20gXCIuL2ltYWdlcy8xLmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2U3IGZyb20gXCIuL2ltYWdlcy8yLmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2U4IGZyb20gXCIuL2ltYWdlcy8zLmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2U5IGZyb20gXCIuL2ltYWdlcy80LmpwZ1wiO1xyXG5pbXBvcnQgSW1hZ2UxMCBmcm9tIFwiLi9pbWFnZXMvNS5qcGdcIjtcclxuaW1wb3J0IEltYWdlMTEgZnJvbSBcIi4vaW1hZ2VzLzEuanBnXCI7XHJcbmltcG9ydCBJbWFnZTEyIGZyb20gXCIuL2ltYWdlcy8yLmpwZ1wiO1xyXG5cclxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL01lZGlhXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL0JhY2tncm91bmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaWQ6IFwiaG9tZVwiLFxyXG4gICAgICBlbGVtZW50OiBcIi5ob21lXCIsXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XHJcbiAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgZWFzZTogMC4wNSxcclxuICAgICAgY3VycmVudDogMCxcclxuICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICBsYXN0OiAwLFxyXG4gICAgfTtcclxuICAgIHRoaXMub25DaGVja0RlYm91bmNlID0gZGVib3VuY2UodGhpcy5vbkNoZWNrLCAyMDApO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKCk7XHJcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcclxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJhY2tncm91bmQoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLm1lZGlhc0ltYWdlcykuZm9yRWFjaCgoeyBpbWFnZTogc291cmNlIH0pID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgIHRoaXMubG9hZGVkID0gMDtcclxuXHJcbiAgICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKF8pID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRoaXMubWVkaWFzSW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVSZW5kZXJlcigpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHJcbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcclxuICAgIHRoaXMuZ2wuY2xlYXJDb2xvcigwLjc5NjA3ODQzMTM3LCAwLjc5MjE1Njg2Mjc0LCAwLjc0MTE3NjQ3MDU4LCAxKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbWVyYSgpIHtcclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKTtcclxuICAgIHRoaXMuY2FtZXJhLmZvdiA9IDQ1O1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDIwO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NlbmUoKSB7XHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpO1xyXG4gIH1cclxuICBjcmVhdGVHZW9tZXRyeSgpIHtcclxuICAgIHRoaXMucGxhbmVHZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XHJcbiAgICAgIGhlaWdodFNlZ21lbnRzOiA1MCxcclxuICAgICAgd2lkdGhTZWdtZW50czogMTAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZU1lZGlhcygpIHtcclxuICAgIHRoaXMubWVkaWFzSW1hZ2VzID0gW1xyXG4gICAgICB7IGltYWdlOiBJbWFnZTEsIHRleHQ6IFwiQ2FyYm9uIE1vYmlsZVwiLCB1cmw6IFwiL2RcIiB9LFxyXG4gICAgICB7IGltYWdlOiBJbWFnZTIsIHRleHQ6IFwiQ2hvb3NlXCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlMywgdGV4dDogXCJNZWRpYSBQUExcIiB9LFxyXG4gICAgICB7IGltYWdlOiBJbWFnZTQsIHRleHQ6IFwiRmVycnVtIFBhbmVsXCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlNSwgdGV4dDogXCJNZWRpY2FsIFNtYXJ0XCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlNiwgdGV4dDogXCJTYWdoaXJ5XCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlNywgdGV4dDogXCJHbGF2IFBpdG9tbmlrXCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlOCwgdGV4dDogXCJSdWJpblwiLCB1cmw6IFwiL2RcIiB9LFxyXG4gICAgICB7IGltYWdlOiBJbWFnZTksIHRleHQ6IFwiRGltYSBEb21cIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2UxLCB0ZXh0OiBcIkNhcmJvbiBNb2JpbGVcIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2UyLCB0ZXh0OiBcIkNob29zZVwiLCB1cmw6IFwiL2RcIiB9LFxyXG4gICAgICB7IGltYWdlOiBJbWFnZTMsIHRleHQ6IFwiTWVkaWEgUFBMXCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlNCwgdGV4dDogXCJGZXJydW0gUGFuZWxcIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2U1LCB0ZXh0OiBcIk1lZGljYWwgU21hcnRcIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2U2LCB0ZXh0OiBcIlNhZ2hpcnlcIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2U3LCB0ZXh0OiBcIkdsYXYgUGl0b21uaWtcIiwgdXJsOiBcIi9kXCIgfSxcclxuICAgICAgeyBpbWFnZTogSW1hZ2U4LCB0ZXh0OiBcIlJ1YmluXCIsIHVybDogXCIvZFwiIH0sXHJcbiAgICAgIHsgaW1hZ2U6IEltYWdlOSwgdGV4dDogXCJEaW1hIERvbVwiLCB1cmw6IFwiL2RcIiB9LFxyXG4gICAgXTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVkaWFzSW1hZ2VzKTtcclxuICAgIHRoaXMubWVkaWFzID0gdGhpcy5tZWRpYXNJbWFnZXMubWFwKCh7IGltYWdlLCB0ZXh0LCB1cmwgfSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbWVkaWEgPSBuZXcgTWVkaWEoe1xyXG4gICAgICAgIGdlb21ldHJ5OiB0aGlzLnBsYW5lR2VvbWV0cnksXHJcbiAgICAgICAgZ2w6IHRoaXMuZ2wsXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgbGVuZ3RoOiB0aGlzLm1lZGlhc0ltYWdlcy5sZW5ndGgsXHJcbiAgICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgICAgc2NyZWVuOiB0aGlzLnNjcmVlbixcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbWVkaWE7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY3JlYXRlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHtcclxuICAgICAgZ2w6IHRoaXMuZ2wsXHJcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBvblRvdWNoRG93bihldmVudCkge1xyXG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLnBvc2l0aW9uID0gdGhpcy5zY3JvbGwuY3VycmVudDtcclxuICAgIHRoaXMuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WDtcclxuICB9XHJcbiAgb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc0Rvd24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFg7XHJcbiAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnN0YXJ0IC0geCkgKiAwLjAxO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnBvc2l0aW9uICsgZGlzdGFuY2U7XHJcbiAgfVxyXG4gIG9uVG91Y2hVcChldmVudCkge1xyXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLm9uQ2hlY2soKTtcclxuICB9XHJcbiAgb25XaGVlbChldmVudCkge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcclxuICAgIGNvbnN0IHNwZWVkID0gbm9ybWFsaXplZC5waXhlbFk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHNwZWVkICogMC4wMDU7XHJcblxyXG4gICAgdGhpcy5vbkNoZWNrRGVib3VuY2UoKTtcclxuICB9XHJcbiAgb25DaGVjaygpIHtcclxuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMubWVkaWFzWzBdO1xyXG4gICAgY29uc3QgaXRlbUluZGV4ID0gTWF0aC5yb3VuZChNYXRoLmFicyh0aGlzLnNjcm9sbC50YXJnZXQpIC8gd2lkdGgpO1xyXG4gICAgY29uc3QgaXRlbSA9IHdpZHRoICogaXRlbUluZGV4O1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC50YXJnZXQgPCAwKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IC1pdGVtO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzaXplKCkge1xyXG4gICAgdGhpcy5zY3JlZW4gPSB7XHJcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNjcmVlbi53aWR0aCwgdGhpcy5zY3JlZW4uaGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XHJcbiAgICAgIGFzcGVjdDogdGhpcy5nbC5jYW52YXMud2lkdGggLyB0aGlzLmdsLmNhbnZhcy5oZWlnaHQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MCk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56O1xyXG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3Q7XHJcblxyXG4gICAgdGhpcy52aWV3cG9ydCA9IHtcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgICB3aWR0aCxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMubWVkaWFzKSB7XHJcbiAgICAgIHRoaXMubWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PlxyXG4gICAgICAgIG1lZGlhLm9uUmVzaXplKHtcclxuICAgICAgICAgIHNjcmVlbjogdGhpcy5zY3JlZW4sXHJcbiAgICAgICAgICB2aWV3cG9ydDogdGhpcy52aWV3cG9ydCxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gbGVycChcclxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxyXG4gICAgICB0aGlzLnNjcm9sbC5lYXNlXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwubGFzdCkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJsZWZ0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubWVkaWFzKSB7XHJcbiAgICAgIHRoaXMubWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwsIHRoaXMuZGlyZWN0aW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZCkge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmQudXBkYXRlKHRoaXMuc2Nyb2xsLCB0aGlzLmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xyXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50O1xyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTVlZTk1YjQ3NzAxMWIyNGU0ZTFcIikiXSwibmFtZXMiOlsiSG9tZSIsIlBhZ2UiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0aGlzIiwic2Nyb2xsIiwiZWFzZSIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0Iiwib25DaGVja0RlYm91bmNlIiwiZGVib3VuY2UiLCJvbkNoZWNrIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVNZWRpYXMiLCJjcmVhdGVCYWNrZ3JvdW5kIiwidXBkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJjcmVhdGVQcmVsb2FkZXIiLCJBcnJheSIsImZyb20iLCJtZWRpYXNJbWFnZXMiLCJmb3JFYWNoIiwiaW1hZ2UiLCJzb3VyY2UiLCJJbWFnZSIsImxvYWRlZCIsInNyYyIsIm9ubG9hZCIsIl8iLCJsZW5ndGgiLCJhZGQiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJjbGVhckNvbG9yIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwiZm92IiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJwbGFuZUdlb21ldHJ5IiwiUGxhbmUiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJJbWFnZTEiLCJ0ZXh0IiwidXJsIiwiSW1hZ2UyIiwiSW1hZ2UzIiwiSW1hZ2U0IiwiSW1hZ2U1IiwiSW1hZ2U2IiwiSW1hZ2U3IiwiSW1hZ2U4IiwiSW1hZ2U5IiwiY29uc29sZSIsImxvZyIsIm1lZGlhcyIsIm1hcCIsImluZGV4IiwiTWVkaWEiLCJnZW9tZXRyeSIsInNjcmVlbiIsInZpZXdwb3J0IiwiYmFja2dyb3VuZCIsIkJhY2tncm91bmQiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwic3RhcnQiLCJ0b3VjaGVzIiwiY2xpZW50WCIsIm9uVG91Y2hNb3ZlIiwieCIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInNwZWVkIiwiTm9ybWFsaXplV2hlZWwiLCJwaXhlbFkiLCJ3aWR0aCIsIml0ZW0iLCJNYXRoIiwicm91bmQiLCJhYnMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzZXRTaXplIiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJQSSIsInRhbiIsIm1lZGlhIiwibGVycCIsImRpcmVjdGlvbiIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9