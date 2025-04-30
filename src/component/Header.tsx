"use client"
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
     const [isClient, setIsClient] = useState(false);
     useEffect(()=>{
           setIsClient(true)
         })
         if (!isClient) {
          return null;
      }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <IconButton 
            color="inherit" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}