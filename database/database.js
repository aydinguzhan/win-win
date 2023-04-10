const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('win_win','root','', {
    host: process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT,  
    dialect:'mysql',
    retry : 3,
  });

module.exports = sequelize