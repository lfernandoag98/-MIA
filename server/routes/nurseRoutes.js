const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nurse = sequelize.define('Nurse', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre es requerido' }
    }
  },
  matricula: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La matrícula es requerida' }
    }
  },
  turno: {
    type: DataTypes.ENUM('MAÑANA', 'TARDE', 'NOCHE'),
    allowNull: false
  },
  sucursal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'enfermeras',
  timestamps: true,
  paranoid: false
});

module.exports = Nurse;