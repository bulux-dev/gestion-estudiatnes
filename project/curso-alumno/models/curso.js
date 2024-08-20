const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Curso = sequelize.define('Curso', {
  codigo: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});

module.exports = Curso;
