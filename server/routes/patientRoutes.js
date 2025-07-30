const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Buscar paciente por CI
router.get('/:ci', patientController.getPatientByCI);

// Registrar nueva atención
router.post('/attention', patientController.registerAttention);

module.exports = router;