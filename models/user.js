const Sequelize = require('sequelize');
const {v4 : uuidv4} = require('uuid')
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.UUID,
    defaultValue: () => uuidv4(),
    allowNull:false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.INTEGER(10),
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
