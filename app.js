const express = require("express");
const path = require("path");
const app = express();
const port = 3002;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/home");
});
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/projects", (req, res) => {
  res.render("pages/projects");
});
app.get("/details", (req, res) => {
  res.render("pages/details");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
