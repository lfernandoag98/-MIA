// server/middleware/validation.js
const { body, validationResult } = require('express-validator');

exports.validateAttention = [
  body('pacienteCi').notEmpty().withMessage('CI del paciente es requerido'),
  body('fecha').isDate().withMessage('Fecha inválida'),
  body('horaInicio').matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Formato de hora inválido (HH:MM)'),
  body('signosVitales').notEmpty().withMessage('Signos vitales son requeridos'),
  body('tipoServicio')
    .notEmpty().withMessage('El tipo de servicio es obligatorio')
    .isIn(['SUCURSAL', 'ATM', 'ENFERMERA']).withMessage('Tipo de servicio inválido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateNurse = [
  // ... (tus validaciones para enfermeras)
];