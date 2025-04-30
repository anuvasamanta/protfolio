'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false);
       useEffect(()=>{
             setIsClient(true)
           })
           if (!isClient) {
            return null;
        }
  return (
    <Box 
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Anuva Samanta
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Front-end Developer
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '600px' }}>
        A strong foundation in HTML, CSS, JavaScript, and React js, passionate about building responsive and user friendly websites.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large"
          href="#contact"
        >
          Contact Me
        </Button>
      </Container>
    </Box>
  );
}