import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const initialPatientData = {
  afiliado: '',
  factura: '',
  nombrePaciente: '',
  genero: '',
  edad: '',
  telefono: '',
  ci: '',
  enfermedadBase: '',
  alergias: ''
};

const initialServiceData = {
  servicio: '',
  signosVitales: '',
  dxPresuntivo: '',
  medicacion: '',
  insumo1: '',
  insumo2: '',
  insumo3: '',
  insumo4: '',
  observaciones: ''
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedShift, setSelectedShift] = useState('NOCHE');
  const [patientData, setPatientData] = useState(initialPatientData);
  const [serviceData, setServiceData] = useState(initialServiceData);
  const [lastAttention, setLastAttention] = useState({
    service: 'Dx',
    nurse: ''
  });
  const [tipoServicio, setTipoServicio] = useState('ENFERMERA');

  const handlePatientInputChange = (field, value) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceInputChange = (field, value) => {
    setServiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    const datosAEnviar = {
      ...patientData,
      ...serviceData,
      tipoServicio,
      fecha: selectedDate,
      turno: selectedShift
      // agrega otros campos si es necesario
    };
    // Aquí deberías hacer la petición POST a tu backend
    // Ejemplo:
    // await axios.post('/api/attentions', datosAEnviar);
    alert('Registro guardado exitosamente');
  };

  const handleClear = () => {
    setPatientData(initialPatientData);
    setServiceData(initialServiceData);
  };

  return (
    <Container maxWidth="xl" sx={{ bgcolor: '#f3f4f6', minHeight: '100vh', p: 0 }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2, mb: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          REGISTRO DE ATENCIONES DEL PACIENTE (PUNTO ENFERMERIA)
        </Typography>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: { xs: 1, md: 4 } }}>
        <Grid container spacing={3} mb={3}>
          {/* Servicio y ubicación */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <FormLabel component="legend" sx={{ mb: 1 }}>TIPO DE SERVICIO</FormLabel>
              <RadioGroup
                row
                value={tipoServicio}
                onChange={e => setTipoServicio(e.target.value)}
              >
                <FormControlLabel value="SUCURSAL" control={<Radio />} label="SUCURSAL" />
                <FormControlLabel value="ATM" control={<Radio />} label="ATM" />
                <FormControlLabel value="ENFERMERA" control={<Radio />} label="ENFERMERA" />
              </RadioGroup>
              <TextField fullWidth label="Sucursal" margin="normal" defaultValue="BANZER 5° - FCH" />
              <TextField fullWidth label="Enfermera" margin="normal" defaultValue="MIRTHA GUATAICA" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Fecha"
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Generar ATM
                  </Button>
                </Grid>
              </Grid>
              <TextField fullWidth label="Hora de inicio" type="time" margin="normal" InputLabelProps={{ shrink: true }} />
              <TextField fullWidth label="Hora final" type="time" margin="normal" InputLabelProps={{ shrink: true }} />
            </Paper>
          </Grid>

          {/* Buscar y turno */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <TextField
                fullWidth
                label="Buscar por C.I."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Button variant="contained" color="warning" sx={{ ml: 1 }}>
                      <SearchIcon />
                    </Button>
                  )
                }}
                margin="normal"
              />
              <Divider sx={{ my: 2 }} />
              <FormLabel component="legend" sx={{ mb: 1 }}>MÉDICO TELE-VIDEO</FormLabel>
              <RadioGroup value={selectedShift} onChange={e => setSelectedShift(e.target.value)}>
                <FormControlLabel value="NOCHE" control={<Radio />} label="NOCHE" />
              </RadioGroup>
              <TextField fullWidth label="Turno" value={selectedShift} margin="normal" InputProps={{ readOnly: true }} />
            </Paper>
          </Grid>

          {/* Botones y última atención */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                startIcon={<DeleteIcon />}
                sx={{ mb: 2 }}
                onClick={handleClear}
              >
                LIMPIAR/BORRAR
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<SearchIcon />}
                sx={{ mb: 2 }}
                onClick={() => alert('Función de búsqueda')}
              >
                BUSCAR
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                sx={{ mb: 2 }}
                onClick={handleSave}
              >
                REGISTRAR
              </Button>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ bgcolor: '#f9fafb', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  FECHA DE ULTIMA ATENCION
                </Typography>
                <Typography variant="body2">Servicio: <b>{lastAttention.service}</b></Typography>
                <Typography variant="body2">Enfermera: <b>{lastAttention.nurse}</b></Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Datos del paciente y servicio */}
        <Grid container spacing={3}>
          {/* Paciente */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, bgcolor: '#f3f4f6', p: 1, borderRadius: 1 }}>
                DATOS DEL PACIENTE
              </Typography>
              {[
                { key: 'afiliado', label: 'AFILIADO' },
                { key: 'factura', label: 'FACTURA' },
                { key: 'nombrePaciente', label: 'NOMBRE DEL PACIENTE' },
                { key: 'genero', label: 'GÉNERO' },
                { key: 'edad', label: 'EDAD' },
                { key: 'telefono', label: 'TELÉFONO' },
                { key: 'ci', label: 'C.I.' },
                { key: 'enfermedadBase', label: 'ENFERMEDAD DE BASE' },
                { key: 'alergias', label: 'ALERGIAS' }
              ].map(({ key, label }) => (
                <TextField
                  key={key}
                  fullWidth
                  label={label}
                  value={patientData[key]}
                  onChange={e => handlePatientInputChange(key, e.target.value)}
                  margin="dense"
                />
              ))}
            </Paper>
          </Grid>
          {/* Servicio */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, bgcolor: '#f3f4f6', p: 1, borderRadius: 1 }}>
                DATOS DEL SERVICIO
              </Typography>
              {[
                { key: 'servicio', label: 'SERVICIO' },
                { key: 'signosVitales', label: 'SIGNOS VITALES' },
                { key: 'dxPresuntivo', label: 'DX PRESUNTIVO' },
                { key: 'medicacion', label: 'MEDICACION' },
                { key: 'insumo1', label: 'INSUMO 1' },
                { key: 'insumo2', label: 'INSUMO 2' },
                { key: 'insumo3', label: 'INSUMO 3' },
                { key: 'insumo4', label: 'INSUMO 4' }
              ].map(({ key, label }) => (
                <TextField
                  key={key}
                  fullWidth
                  label={label}
                  value={serviceData[key]}
                  onChange={e => handleServiceInputChange(key, e.target.value)}
                  margin="dense"
                />
              ))}
              <TextField
                fullWidth
                label="OBSERVACIONES"
                value={serviceData.observaciones}
                onChange={e => handleServiceInputChange('observaciones', e.target.value)}
                margin="dense"
                multiline
                minRows={3}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;