const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
