import React from 'react'
import { Container, Box, Divider, Typography, Link, Grid ,IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>



       <Box sx={{ bgcolor: "#f5f5f5", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Snipp-Script
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We believe the best way to learn Javascript is by Solving Snippets
        </Typography>
        <Copyright />
        <Box
        align='center'
        my="25px"
        >
        <IconButton href='https://www.instagram.com/m_maldikar/'> <InstagramIcon fontSize="large" /> </IconButton>
        <IconButton href='https://www.linkedin.com/in/abhishek-maldikar-201440217/'> <LinkedInIcon fontSize="large"/> </IconButton>
        
        </Box>
      </Box> 

      

    </div>
  )
}

export default Footer