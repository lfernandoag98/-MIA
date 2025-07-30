const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nurse = sequelize.define('Nurse', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  matricula: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      is: /^[A-Z]{2,3}-\d{4,5}$/ // Ejemplo: RN-12345
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
  timestamps: true
});

module.exports = Nurse;