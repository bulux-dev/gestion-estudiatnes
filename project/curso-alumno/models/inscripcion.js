const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

class Inscripcion extends Model {}

Inscripcion.init({
  cursoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Cursos', 
      key: 'id',
    },
  },
  alumnoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Alumnos', 
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Inscripcion',
  tableName: 'Inscripcions',
  timestamps: false, 
});

module.exports = Inscripcion;
