var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//require('/models/burgers.js')(app);

var orm = require('./config/orm.js');
var methodOverride = require('method-override');


app.get('/', function(req, res){
	console.log("returning all burgers");
	var data  = orm.returnBurgers(function(burgers){
		res.render('index', {burgers});
	});
});

app.post('/submit', function(req, res){
	console.log('adding a burger');
	orm.addBurger(req.body, function(data){
	});
})



var port = 3000;
app.listen(port, function(){
	console.log("App listening on PORT: " + port);
});

