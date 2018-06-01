var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/profile', upload.array(), function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/form', function(req, res){
  res.render('form');
});
app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
});
app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});
app.get('/topic/:id/:mode', function(req,res){
  res.send(req.params.id+','+req.params.mode)
});
// app.get('/topic/:id', function(req, res){
//   var topics = [
//     'Javascript is....',
//     'Nodejs is...',
//     'Express is...'
//   ];
//   var output = `
//   <a href="/topic?id=0">JavaScript</a><br>
//   <a href="/topic?id=1">Nodejs</a><br>
//   <a href="/topic?id=2">Express</a><br><br>
//   ${topics[req.params.id]}
//   `
//   res.send(output);
// });
app.get('/topic/:id/:mode', function(req, res){
  res.send(req.params.id+','+req.params.mode)
});
app.get('/template', function(req, res){
  res.render('temp', {time:Date(), title:'Jade'});
})
app.get('/', function(req, res){
    res.send('Hello home page');;
});
app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>`;
  res.send(output);
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/bts.jpg">')
});
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});
