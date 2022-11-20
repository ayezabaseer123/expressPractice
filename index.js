var express = require('express');

var app = express();
var things = require('./things.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.set('view engine', 'pug');
app.set('views','./views');
//To parse URL encoded data
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

app.use(cookieParser())

app.use(function(req, res, next){
    console.log("Start");
    next();
 });
 
 //Route handler
 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 app.use('/', function(req, res){
    console.log('End');
 });
 

app.get('/components', function(req, res){
    res.render('content');
});
app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "TutorialsPoint", 
       url:"http://www.tutorialspoint.com"
    });
 });
app.get('/first_template', function(req, res){
    res.render('first_view');
 });
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });

 app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });

 app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });


//First middleware before response is sent
// app.use(function(req, res, next){
//     console.log("Start");
//     next();
//  });
// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });
// app.use('/things', things);


// app.use('/', function(req, res){
//     console.log('End');
//  });

 //router


 app.get('/', function(req, res, next){
    res.send("Middle");
    next();
 });
 
 
app.get('/', function(req, res){
   res.send("Hello world!");
});


app.get('/hello', function(req, res){
    res.send("Hello World Hello");
 });
 
app.post('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });

 app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
 

app.listen(3000);