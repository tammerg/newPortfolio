var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.listen(PORT, function(req, res){
  console.log("You are listening on port %s", PORT);s
})
