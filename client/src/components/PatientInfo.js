import React from 'react';
import { Paper, Typography, Grid, TextField } from '@mui/material';

const PatientInfo = () => {
  // Estos datos vendrán de la API luego
  const patientData = {
    nombre: 'Juan Pérez',
    ci: '1234567',
    genero: 'Masculino',
    edad: 35,
    telefono: '555-1234',
    enfermedadBase: 'Diabetes',
    alergias: 'Penicilina'
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        DATOS DEL PACIENTE
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nombre del Paciente"
            value={patientData.nombre}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Género"
            value={patientData.genero}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Edad"
            value={patientData.edad}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Teléfono"
            value={patientData.telefono}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="C.I."
            value={patientData.ci}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enfermedad de Base"
            value={patientData.enfermedadBase}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Alergias"
            value={patientData.alergias}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
            multiline
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PatientInfo;