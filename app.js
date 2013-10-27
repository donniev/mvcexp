
/**
 * Module dependencies.
 */
var http = require('http');
var express = require('express');
var path = require('path');
var config=require('./config');
var app = express();
app.use(express.bodyParser());
app.set("config",config);
// all environments
app.set('port', config.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));

app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
var routes=require('./routes')(app);
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



http.createServer(app).listen(app.get('port'), function(){
  console.log(config.applicationName+' listening on port ' + app.get('port'));
});
