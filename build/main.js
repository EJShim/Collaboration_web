'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(__dirname + '/../public'));

// app.post('/foweij')
// app.use('/', function(req, res){
//   return res.send("asdfasdf")
// })
// app.use('/hello',(req,res)=>{
//   res.render(__dirname+'../public/index.html');
// });

/*
app.get('/hello', (req, res) => {
  //res.send('<h1>Can you hear me?<h1>');
  res.send(__dirname + '../public/index.html');
});*/

app.use('/posts', _posts2.default);

//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.
var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});