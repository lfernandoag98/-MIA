// server/routes/attentionRoutes.js
const express = require('express');
const router = express.Router();
const { Attention } = require('../models');
const { validateAttention } = require('../middleware/validation');

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error('Error en atención:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// POST /api/attentions - Crear nueva atención
router.post('/', validateAttention, asyncHandler(async (req, res) => {
  const nuevaAtencion = await Attention.create(req.body);
  res.status(201).json(nuevaAtencion);
}));

// GET /api/attentions - Listar atenciones
router.get('/', asyncHandler(async (req, res) => {
  const atenciones = await Attention.findAll({
    order: [['fecha', 'DESC']]
  });
  res.json(atenciones);
}));

module.exports = router;