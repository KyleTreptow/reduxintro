var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){ 
  return Todos = sequelize.define("Todos", {
    id: {
      type: DataTypes.INTEGER, 
      field: "id",             
      autoIncrement: !0,       
      primaryKey: !0
    },
    name: {               
      type: DataTypes.STRING,  
      field: "name"      
    },
    completed: {                
      type: DataTypes.BOOLEAN,  
      field: "completed"       
    },
  });
};

