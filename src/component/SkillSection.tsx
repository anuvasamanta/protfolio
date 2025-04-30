'use client'
import { Box, Typography, Container, Grid, LinearProgress } from '@mui/material';
import { skills } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function SkillsSection() {
   const [isClient, setIsClient] = useState(false);
         useEffect(()=>{
               setIsClient(true)
             })
             if (!isClient) {
              return null;
          }
  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
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
          My Skills
        </Typography>
        
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid size={{xs:12,sm:6}} key={skill.name}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  mb: 1
                }}>
                  <Typography variant="body1" fontWeight="medium">
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    backgroundColor: 'action.disabledBackground',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                    }
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}