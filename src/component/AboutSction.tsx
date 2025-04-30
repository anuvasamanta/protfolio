'use client'
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
    const [isClient, setIsClient] = useState(false);
       useEffect(()=>{
             setIsClient(true)
           })
           if (!isClient) {
            return null;
        }
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 6,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: "primary.main",
              margin: "20px auto 0",
            },
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                height: { xs: "300px", md: "400px" },
              }}
            >
              <Image
                src="/assert/profile.jpg"
                alt="Profile picture"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
              }}
            >
              Who I Am
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              A strong foundation in HTML, CSS, JavaScript, and React js,
              passionate about building responsive and user friendly websites.
              Eager to contribute to a dynamic team, learn new technologies, and
              deliver innovative solutions that enhance user experience. Seeking
              an opportunity to grow my skills in a challenging and
              collaborative environment.
            </Typography>

            <Typography variant="body1" paragraph sx={{ mb: 2 }}>
              I specialize in JavaScript technologies across the whole stack
              (React,Next js., TypeScript), and I love creating efficient,
              scalable solutions with great user experiences.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid size={{ xs: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Name:
                </Typography>
                <Typography variant="body1">Anuva Samanta</Typography>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Email:
                </Typography>
                <Typography variant="body1">samantaanuva1@gmail.com</Typography>
              </Grid>

              <Grid size={{ xs: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Location:
                </Typography>
                <Typography variant="body1">Kolkata</Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <a href="/assert/Anuva Samanta (CV) (2).pdf" download>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                }}
                href="#contact"
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
