import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useScroll } from "framer-motion"
import undraw from '../images/undraw.svg'
import { Container, Box, Divider, Button } from '@mui/material';
import { Link as L } from "react-scroll"
import { useState, useEffect } from 'react';
import "../index.css"
import Typewriter from "typewriter-effect"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HeroSection = () => {

  // const [text, setText] = useState("")
  // const [fullText, setFullText] = useState(
  //   "Javascript made easy... |"
  // )
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   if (index < fullText.length) {
  //     setTimeout(() => {
  //       setText(text + fullText[index])
  //       setIndex(index + 1)
  //     }, 75)
  //   }
  // }, [index])

  return (
    <div>



      <Container
        maxWidth='md'
        // justifyContent='center'
        // alignItems='center'
        sx={{
          my: 20
        }}
      >

        <Grid
          container spacing={1}
        >


          <Grid
            item xs={12} sm={6} md={6}
            display='flex'
            justifyContent='center'
          >
            <Typography

              sx={{
                mt: "100px",
                color:"#606060",
                fontSize: {

                  lg: 50,
                  md: 50,
                  sm: 40,
                  xs: 30
                }

              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Javascript made easy...")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Subcribe to SnippScript...")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Javascript made easy...")
                    .start()



                }}
              />
            </Typography>

          </Grid>



          {/* typography: { sm: 'body1', xs: 'body2' } */}

          <Grid item xs={12} sm={6} md={6} mt={5}>
            <img
              src={undraw}
              alt='/'
              loading="lazy"
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: 0,
                margin: 0,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} >
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              
            }}
           
            >
              <Button
                variant="contained"

                color="primary"
                style={{ backgroundColor: '#FFD700' }}
                
              >
                <L
                  to='subscribe'
                  smooth={true}
                  duration={1000}
                  offset={-200}>
                  Subscribe
                </L>
              </Button>

              

              <InstagramIcon 
              fontSize="large"
              
              style={{ marginLeft : "15px" }}/>
              <LinkedInIcon 
              fontSize="large"
              sx={{
                marginLeft : "15px"
              }}/>

            </Box>
          </Grid>

        </Grid>

      </Container>

      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems: "center"
        }}
        disablegutter
      >
        <Divider
          variant='middle'
          sx={{
            width: "70%"
          }}
        />

      </Box>


    </div>
  )
}

export default HeroSection