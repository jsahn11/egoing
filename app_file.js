var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Connected port 3000!');
});

app.set('views', './views_file')
app.set('view engine', 'pug')
app.get('/', function(req,res){
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get('/topic/new', function(req,res){
  res.send('hi')
})
