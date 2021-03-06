var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var session = require ('express-session');
var bodyParser = require('body-parser');

app.use('/js', express.static('public/js'));
app.use('/style', express.static('public/style'));
app.use('/img', express.static('public/img'));

app.get("/", function (req ,res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/:projectName", function (req ,res) {
  var stringPath = "/views/" + req.params.projectName;
  res.sendFile(process.cwd() + stringPath);
  console.log(stringPath);
});

app.listen(PORT, function(req, res){
  console.log("You are listening on port %s", PORT);
});
