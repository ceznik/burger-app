var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var orm = require('./config/orm.js');

var port = 3000;
app.listen(port, function(){
	console.log("App listening on PORT: " + port);
});
