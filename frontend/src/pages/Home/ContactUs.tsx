import Footer from 'pages/Home/Footer'
import React from "react";
import { Box, Container, Typography, Link, Divider, Paper } from '@mui/material';
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

type Props = {}

const ContactUs = (props: Props) => {

  const navigate = useNavigate();

  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h6" style={{textAlign:'center'}}>CONTACT</Typography>
        <Typography variant="h2" style={{textAlign:'center', marginTop:'0.5em'}}>
          Explore the possibilities with Dal Portfolio.
        </Typography>
        <Typography variant="h6" style={{textAlign:'center', color:'#969ca9'}}>
          Reach out to learn more about how Dal Portfolio can elevate your university's portfolio management.
        </Typography>


        <Box>
          <Typography variant="body1" style={{textAlign:'center', marginTop:'3em', fontStyle:'italic'}}>
            If you have any questions or would like more information, feel free to reach out to us:
          </Typography>
          <Paper
            elevation={5}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              justifyContent: "center",
              marginTop: '1em',
              fontSize:'1em',
              padding:'1em'
            }}
          >
            <Link href="mailto:contact.dalportfolio@gmail.com">
              <EmailIcon style={{ verticalAlign: "middle", marginRight: "5px", color:'#fcd405'}} />
            </Link>
            <span style={{fontWeight:'bold'}}>Email: </span>
            <Link href="mailto:contact.dalportfolio@gmail.com" style={{marginLeft:'5px'}}>
              contact.dalportfolio@gmail.com
            </Link>
          </Paper>
        </Box>
        
        <Divider style={{margin:'1em'}}/>

        <Box style={{textAlign:'center'}}>
          <Typography variant="h2" >Want to know more about us?</Typography>
          <Button
            variant="contained"
            to="/about-us"
            sx={{
              margin: 1,
              textAlign:'center',
              marginTop:'1.5em',
              marginBottom:'2em',
            }}
            onClick={() => navigate("/about-us")}
            label="Explore our journey and mission"
          />
        </Box>

        <Divider style={{margin:'1em'}}/>

      </Container>

      <Footer />
    </Box>
  )
}

export default ContactUs