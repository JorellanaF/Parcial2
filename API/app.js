var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tareasRouter = require('./routes/tarea');

var app = express();
const mongoose = require("mongoose")
const config = require("./config")

mongoose.connect(config.db, { useNewUrlParser: true }, (err) =>{
  if(err){
    return console.log(`Error al conectarse a la base de datos: ${err}`)
  }
  console.log("Conectado a la base")
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tarea', tareasRouter);
app.use('/',tareasRouter);

/*app.get('/tarea', tareasRouter);
app.get('/tarea/:tareaId', tareasRouter);
app.post('/', tareasRouter);
app.put('/tarea/:tareaId', tareasRouter);
app.delete('/tarea/:tareaId', tareasRouter);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
