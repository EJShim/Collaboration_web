import express from 'express';
import posts from './routes/posts'


const app = express();
let port = 3000;


app.use('/', express.static(__dirname + '/../public'));

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

app.use('/posts', posts);



//Open Server
//function(param1, function()...)  파라미터로 들어가는 function 은 callback  함수로, 순서로 시작, function() 대신 ()=> 형태로 씀.
const server = app.listen(port, function(){
  console.log('Express listening on port', port);
});
