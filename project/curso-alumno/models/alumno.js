const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('Alumno', {
  matricula: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false // Deshabilita las columnas createdAt y updatedAt
});

module.exports = Alumno;
