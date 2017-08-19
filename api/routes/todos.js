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
    .on('success', function (todo) {
      if (todo) {
        todo.updateAttributes({
         completed: !req.body.completed
        })
        .success(function () {console.log("Successfully updated")})
       }
    });
});

router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

module.exports = router;
