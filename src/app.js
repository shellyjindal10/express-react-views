/**
 * Module dependencies.
 */
var express = require('express');
var logger = require('morgan');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var reactViews = require('express-react-views');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

//Route / points to index.js
app.get('/', routes.index);

//HTTP server listens to port 3000 or port defined by user{process.env.PORT}
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
