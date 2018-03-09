var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

var exphbs = require('express3-handlebars')
// ({ defaultLayout:'main', extname: '.hbs' });

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/', function(req, res){
  res.render('home');
});

app.get('/feature', function(req, res){
  res.render('Feature');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500')
});

app.listen(app.get('port'), function(){
  console.log('Express Start localhost:' + app.get('port'));
});
