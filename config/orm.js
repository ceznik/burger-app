var connection = require('./connection.js');

var orm = {
	//query functions

	addBurger: function(burger_name){
		var a = "INSERT into burgers (burger_name, devoured) VALUES ('" + burger_name + "', FALSE);";
		connection.query(a, function(err, result){
			console.log(result);
		});
	},

	devourBurger: function(burger_name){
		var s = "UPDATE burgers SET devoured = TRUE WHERE burger_name='" + burger_name + "';";//update devoured attribute to true
		connection.query(s, function(err, result){
			console.log(result);
		});
	}
};

module.exports = orm;
