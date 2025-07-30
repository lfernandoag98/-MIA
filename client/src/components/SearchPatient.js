import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchPatient = () => {
  const [ci, setCi] = useState('');
  
  const handleSearch = () => {
    console.log('Buscando paciente con CI:', ci);
    // Aquí implementarás la búsqueda
  };
  
  const handleClear = () => {
    setCi('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        BUSCAR POR C.I.
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          label="Cédula de Identidad"
          variant="outlined"
          value={ci}
          onChange={(e) => setCi(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          BUSCAR
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ClearIcon />}
          onClick={handleClear}
        >
          LIMPIAR
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchPatient;