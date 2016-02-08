var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/rps', function(req, res){
  res.sendFile(process.cwd() + '/views/rps.html');
});

app.get('/repo', function(req, res){
  res.sendFile(process.cwd() + '/views/repo.html');
});

app.listen(PORT, function(req, res){
  console.log("You are listening on port %s", PORT);
});
