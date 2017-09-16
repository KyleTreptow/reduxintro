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
 }).then(() => {
   // Table created
   return Todos.create(
 	  {
 	    name: 'Database Seed 002',
 	    completed: false
 	  }
   );
 }).then(() => {
   // Table created
   return Todos.create(
 	  {
 	    name: 'Database Seed 003',
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

/* UPDATE todos listing. */
router.put('/', function(req, res) {
  Todos.findById(req.body.id)
    .then(todos => {
        todos.updateAttributes({
         completed: !req.body.completed
        })
        .then(function () {console.log("Successfully updated")})
    });
});

router.post('/', function (req, res) {
  Todos.create(req.body);
  res.send({"error": false});
})

module.exports = router;
