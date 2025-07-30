const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attention = sequelize.define('Attention', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horaFinal: {
    type: DataTypes.TIME
  },
  signosVitales: {
    type: DataTypes.TEXT
  },
  dxPresuntivo: {
    type: DataTypes.TEXT
  },
  medicacion: {
    type: DataTypes.TEXT
  },
  servicio: {
    type: DataTypes.STRING
  },
  enfermera: {
    type: DataTypes.STRING
  },
  tipoServicio: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'atenciones',
  timestamps: false
});

module.exports = Attention;