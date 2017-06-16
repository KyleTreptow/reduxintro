var express = require('express');
var router = express.Router();
var connection = require('../model');
var Todos = require('../model').Todos;
var Sequelize = require('sequelize');


// force: true will drop the table if it already exists
 Todos.sync({force: true}).then(() => {
   // Table created
   return Todos.create(
 	  {
 	    name: 'Database Seed 001',
 	    completed: false
 	  }
   );
 });


/* GET todos listing. */
router.get('/', function(req, res, next) {
    Todos.findAll().then(todos => {
  		res.send(todos);
  	})
  	.catch(err => {
    	console.error('Aw beans, it broke:', err);
  	});
});
router.post('/', function(req, res, next) {
    Todos.create({
      name: req.body.todo,
      completed: false
    })
  	.catch(Sequelize.ValidationError, function (err) {
    	console.error('Aw beans, it broke:', err);
  	});
});

module.exports = router;
