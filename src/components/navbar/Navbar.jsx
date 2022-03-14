import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"style={{ background: 'transparent', boxShadow: 'none', borderRadius:'25px'}}>
        <Toolbar>

          <Typography style={{fontSize:'40px', color:'#000000'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Meteo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
