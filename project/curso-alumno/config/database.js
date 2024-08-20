const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_cursos_alumnos', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307,
});

module.exports = sequelize;
