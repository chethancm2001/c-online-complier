const express = require("express");
const router = require("./route");
const app = express();

//using buitin middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//router for all routes
app.use(express.static("static"));
app.use("/", router);
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is runing");
});
