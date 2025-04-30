"use client"
import { 
    Box, 
    Container, 
    Typography, 
    Grid, 
    TextField, 
    Button, 
    Paper,
    Alert,
    Stack
  } from "@mui/material";
  import EmailIcon from "@mui/icons-material/Email";
  import SendIcon from "@mui/icons-material/Send";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import { useEffect, useState } from "react";
  
  export default function ContactSection() {
    const [formData, setFormData] = useState({
      name:"",
      email: "",
      message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isClient, setIsClient] = useState(false);
    useEffect(()=>{
      setIsClient(true)
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        setError("Please fill in all fields");
        return;
      }
  
      try {
        // Replace with your actual form submission logic
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset submission status after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        setError("Failed to send message. Please try again later.");
        console.log(err);
        
      }
    };
    if (!isClient) {
      return null;
  }
    return (
      <Box 
        id="contact"
        sx={{
          py: 8,
          bgcolor: "background.default",
        }}
      >
        <Container maxWidth="md">
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
                content: "",
                display: "block",
                width: "80px",
                height: "4px",
                backgroundColor: "primary.main",
                margin: "20px auto 0",
              }
            }}
          >
            Get In Touch
          </Typography>
  
          <Grid container spacing={6}>
            <Grid size={{xs:12,md:6}}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out if you are looking for a developer, have a question, 
                or just want to connect.
              </Typography>
  
              <Box component="address" sx={{ mt: 4, fontStyle: "normal"}}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Email:</strong>samantaanuva1@gmail.com
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Phone:</strong> (+91) 9339116039
                </Typography>
                <Typography variant="body1">
                  <strong>Location:</strong> Kolkata
                </Typography>
              </Box>
  
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="outlined" 
                  startIcon={<EmailIcon />}
                  href="samantaanuva1@gmail.com"
                  sx={{ mr: 2 }}
                >
                  Email Me
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/anuva-samanta-b193922b4"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </Box>
            </Grid>
  
            <Grid size={{xs:12,md:6}}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Send Me a Message
                </Typography>
                
                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you! Your message has been sent successfully.
                  </Alert>
                )}
                
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}
  
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ alignSelf: "flex-end" }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }