const Patient = require('../models/Patient');
const Attention = require('../models/Attention');

exports.getPatientByCI = async (req, res) => {
  try {
    const { ci } = req.params;
    const patient = await Patient.findByPk(ci);
    
    if (!patient) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    
    // Obtener últimas atenciones
    const attentions = await Attention.findAll({
      where: { pacienteCi: ci },
      order: [['fecha', 'DESC']],
      limit: 5
    });
    
    res.json({
      patient,
      lastAttentions: attentions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar paciente' });
  }
};

exports.registerAttention = async (req, res) => {
  try {
    const { pacienteCi, ...attentionData } = req.body;
    
    // Verificar que el paciente existe
    const patient = await Patient.findByPk(pacienteCi);
    if (!patient) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    
    const newAttention = await Attention.create({
      ...attentionData,
      pacienteCi
    });
    
    res.status(201).json(newAttention);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar atención' });
  }
};