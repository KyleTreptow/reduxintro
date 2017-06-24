<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var connection = require('../model');
var Todos = require('../model').Todos;

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
=======
//routes/todos.js
var express = require('express');
var router = express.Router();
var Todos = require('../model').Todos;

  	// force: true will drop the table if it already exists
	Todos.sync({force: false}).then(() => {
	  // Table created
	  return Todos.create({
	    name: 'Mow the lawn',
	    completed: false
	  });
	});
>>>>>>> origin/master


/* GET todos listing. */
router.get('/', function(req, res, next) {
    Todos.findAll().then(todos => {
  		res.send(todos);
  	})
  	.catch(err => {
    	console.error('Aw beans, it broke:', err);
  	});
});

<<<<<<< HEAD
=======
router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

>>>>>>> origin/master
module.exports = router;
