import React from 'react'
import { Container, Grid, Typography, Divider , Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import snippets from '../images/snippets.JPG';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import { color } from '@mui/system';




const Blog = () => {


    const navLinkStyles = ({ isActive }) => {
        return {
          textDecoration: 'none',
        }
      }



    const navLink = [

        { img: snippets, btn1: "Share", btn2: "Read More" , content : " 'this' keyword in javascript"},
        { img: snippets, btn1: "Share", btn2: "Read More" , content : " 'this' keyword in javascript"},
        { img: snippets, btn1: "Share", btn2: "Read More" , content : " 'this' keyword in javascript" },


    ]
    return (
        <div>
            <Container
                maxWidth='md'
                sx={{
                    my: 5,
                }}
            >
                <Typography variant='h4' color="#505050" >
                    Snippets
                </Typography>


                <Grid
                    container spacing={3}
                    sx={{

                        my: 5
                    }}
                >
                    {navLink.map((item) => (
                        <Grid
                            item xs={12} sm={6} md={6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",

                            }}
                        >
                            <Card
                                sx={{
                                    maxWidth: 345,

                                }}

                                whileHover={{ scale: 0.93 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}

                            >

                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="215"
                                    image={item.img}

                                />
                                <CardContent>
                                    <Typography sx={{ 
                                        fontSize: 19,
                                        color:"#606060" 
                                        }}>{item.content}</Typography>
                                </CardContent>
                                <CardActions display="flex" >
                                    <Button size="small"><NavLink to='/pages' style={navLinkStyles} >{item.btn2}</NavLink></Button>
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
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

export default Blog