var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var session = require ('express-session');
var bodyParser = require('body-parser');

app.use('/js', express.static('public/js');
app.use('/style', express.static('public/style');
app.use('/html', express.static('public/html');
app.use('/img', express.static('public/img');



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
