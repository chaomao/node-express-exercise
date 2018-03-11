var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(require('morgan')('dev'));
app.use(express.static(__dirname + '/public'));

var feature = require('./lib/feature.js');

app.get('/', function(req, res){
  res.render('home', {code: feature.getFeature()});
});

app.get('/json', function(req, res){
  res.type('application/json');
  res.render('json');
});

app.get('/feature', function(req, res){
  res.render('feature');
});

var github = require('./lib/github');

app.get('/github/:username', function(req, res){
  github.userInfo(req.params.username,
    function(data){
      res.type('application/json').json(JSON.parse(data));
    },
    function(error){
      console.log('error at github ' + error.message);
      res.json(error.message);
    }
  )
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});


app.listen(app.get('port'), function(){
  console.log('Express Start localhost:' + app.get('port'));
});

module.exports = app;
