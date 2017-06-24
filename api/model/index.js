var Sequelize = require('sequelize');

var sequelize = new Sequelize('todo', 'postgres', 'Hayden123', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

// load models                 
var models = [                 
  'Todos',            
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});







