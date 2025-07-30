import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients';

export const searchPatientByCI = async (ci) => {
  try {
    const response = await axios.get(`${API_URL}/${ci}`);
    return response.data;
  } catch (error) {
    console.error('Error al buscar paciente:', error);
    throw error;
  }
};

export const registerAttention = async (attentionData) => {
  try {
    const response = await axios.post(`${API_URL}/attention`, attentionData);
    return response.data;
  } catch (error) {
    console.error('Error al registrar atención:', error);
    throw error;
  }
};