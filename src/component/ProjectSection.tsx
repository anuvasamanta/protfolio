'use client'
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Chip,
  Stack,
  CardActions
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { projects } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function ProjectsSection() {
    const [isClient, setIsClient] = useState(false);
       useEffect(()=>{
             setIsClient(true)
           })
           if (!isClient) {
            return null;
        }
  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            mb: 6,
            position: 'relative',
            '&:after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
              margin: '20px auto 0',
            }
          }}
        >
          My Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{xs:12,sm:6,md:4}} key={project.id}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  height="200"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap">
                    {project.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                  {project.demoUrl && (
                    <Button
                      size="small"
                      variant="contained"
                      endIcon={<LaunchIcon />}
                      href={project.demoUrl}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}