const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('win_win', 'root', '', {
    host: 'localhost',
    port : 3306,  
    dialect:'mysql',
    retry : 3,
  });

module.exports = sequelize