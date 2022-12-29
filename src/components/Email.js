import React, { forwardRef } from 'react'
import {
    Container,
    Grid,
    Typography,
    Divider,
    Box,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import awholeyear from "../images/awholeyear.svg"
import mailbox from '../images/mailbox.svg'



const Email = () => {

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div id='subscribe'>
            <Container
                maxWidth='md'
                sx={{
                    my: 5,
                }}
            >

                <Typography variant='h4' color="#505050">
                    Subscribe To Us
                </Typography>


                <Container
                    maxWidth='md'
                    sx={{
                        my: 5,
                        mb: 10
                    }}
                >
                    <Grid
                        container spacing={5}

                    >
                        <Grid
                            item xs={12} sm={6} md={6}
                            display='flex'
                            justifyContent='center'
                        >
                            <img

                                src={mailbox}
                                alt='/'
                                loading="lazy"
                                style={{
                                    maxWidth: "70%",
                                    height: "auto",
                                    padding: 0,
                                    margin: 0,
                                }}
                            />

                        </Grid>
                        <Grid
                            item xs={12} sm={6} md={6}
                            display='flex'
                            justifyContent='center'
                        >

                            <Box

                                display="flex"
                                flexDirection={"column"}
                                width={450}
                                alignItems="center"
                                justifyContent={"center"}
                                margin="auto"
                                marginTop={5}
                                padding={3}
                                borderRadius={5}
                                boxShadow={"5px 5px 10px #ccc"}

                                sx={{
                                    ":hover": {
                                        boxShadow: "10px 10px 20px #ccc"
                                    }
                                }}
                            >
                                {/* <Typography variant="h6" padding={2}>Stay With Us</Typography> */}
                                <TextField margin="normal" type={'text'} variant='outlined' placeholder='Name'
                                 
                               />
                                <TextField margin="normal" type={'Email'} variant='outlined' placeholder='Email' 
                                
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClickOpen}
                                    style={{
                                        backgroundColor: '#FFD700',
                                        marginTop: 10,
                                        borderRadius: 10
                                    }}
                                >Subscribe</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Dialog
                    open={open}
                    onClose={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    
                >
                    <DialogTitle id="alert-dialog-title" align='center' variant='h4'>
                        {"Thank You!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Subscribe our newsletter and get up to dated with new technologies and get notified for our tutorials
                        </DialogContentText>
                        <Box

                            display="flex"
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent={"center"}
                            margin="auto"
                            marginTop={2}
                            padding={3}
                            borderRadius={5}
                           

                            
                        >


                            <img

                                src={awholeyear}
                                alt='/'
                                loading="lazy"
                                style={{
                                    maxWidth: "70%",
                                    height: "auto",
                                    padding: 0,
                                    margin: 0,
                                }}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Done
                        </Button>
                    </DialogActions>
                </Dialog>

            </Container>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",

                }}
                mb={10}
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

export default Email