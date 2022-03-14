import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'transparent', color:'#8b8b8b'}}>
        <Toolbar>

          <Typography style={{fontSize:'2em'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Meteo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
