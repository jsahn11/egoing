var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

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
app.get('/topic', function(req,res){
  res.render('view');
})
app.post('/topic', function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      console.log(err);
      res.status(500).send('error');
    }
    res.send('success');
  })
})
