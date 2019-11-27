//let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var express = require("express");
var app = express();
const path = require('path')

app.listen(3000, () => {
  console.log("Server is alive ");
  console.log("Listening on Port 3000 ");
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, 'public')))
