var generator = require('./app/generator');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  var number = req.params.number;
  var helloWorldArray = generator.generateHelloWorlds(number);

  res.send('Hello World');
});

app.list(3000);
