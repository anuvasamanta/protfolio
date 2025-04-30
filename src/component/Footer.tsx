import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box 
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Logo/Branding */}
          <Box>
            <Typography variant="h6" component="div" fontWeight="bold">
             Anuva Samanta
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Front-end Developer
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 1, sm: 4 },
              textAlign: 'center',
            }}
          >
            <Link href="#about" color="inherit" underline="hover">About</Link>
            <Link href="#projects" color="inherit" underline="hover">Projects</Link>
            <Link href="#skills" color="inherit" underline="hover">Skills</Link>
            <Link href="#contact" color="inherit" underline="hover">Contact</Link>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              href="https://www.linkedin.com/in/anuva-samanta-b193922b4" 
              target="_blank"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </IconButton>
            <IconButton 
              href=" https://github.com/anuvasamanta" 
              target="_blank"
              aria-label="GitHub"
            >
              <GitHub />
            </IconButton>
            <IconButton 
              href="samantaanuva1@gmail.com" 
              aria-label="Email"
            >
              <Email />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
        >
          © {new Date().getFullYear()} Anuva Samanta. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}