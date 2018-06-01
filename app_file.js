var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, function(){
  console.log('Connected port 3000!');
});
app.locals.pretty = true;
app.set('views', './views_file')
app.set('view engine', 'pug')
app.get('/', function(req,res){
  res.render('form_file');
});
app.get('/topic/new', function(req,res){
  res.send('hi post');
})
app.post('/topic', function(req,res){
  console.log('test');
  res.send('hi, '+req.body.title);
})
