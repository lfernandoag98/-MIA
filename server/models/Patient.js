const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
  ci: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING
  },
  enfermedadBase: {
    type: DataTypes.TEXT
  },
  alergias: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'pacientes',
  timestamps: false
});

module.exports = Patient;