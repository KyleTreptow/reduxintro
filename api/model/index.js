var Sequelize = require('sequelize');

const DB_NAME = process.env.API_DB_NAME;
const DB_USER = process.env.API_DB_USER;
const DB_PASS = process.env.API_DB_PASS;

var sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {

  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
              
var models = [                 
  'Todos',            
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

