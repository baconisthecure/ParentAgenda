//Install dependencies 
var express = require('express');

var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');



var io = require('socket.io')(http);
var mongoose = require('mongoose');

var app = express();


//Configure application
    //configuration data
var config = require('./config.js');
    //Set up routes
var routes = require('./routes');
var student = require ('/routes/student.js');

    //Set up templating
app.set('view engine','ejs');
app.set('port', process.env.PORT ||3000);
app.locals.pagetitle = "Parent Communicator";

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));


if('development' == app.get('env')){
    
}


mongoose.connect(config.mongoUri);

app.get('/', routes.index);    
app.get('/classInfo', routes.classInfo);    
app.get('/threads', routes.threads);    
app.get('/focusMessage', routes.focusMessage);
app.get('/student/1', student.studentstatus);    



io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(app.get('port'), function(){
  console.log('listening on *:' + app.get('port'));
});


