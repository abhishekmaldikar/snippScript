import React from 'react'
import { Container, Box, Divider, Grid, Typography } from '@mui/material';
import mello from '../images/mello.svg'

const AboutUs = () => {
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
                    container spacing={6}
                    mb={10}

                >
                    <Grid item xs={12} md={6} >
                        <Typography variant='h3' color="#505050"

                            sx={{
                                mt: "100px",
                                color: "#606060",
                                fontSize: {

                                    lg: 50,
                                    md: 50,
                                    sm: 40,
                                    xs: 40
                                },

                            }}
                        >
                            About Us
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} display='flex' justifyContent="center" >
                        <img
                            src={mello}
                            style={{
                                maxWidth: "80%",
                                height: "auto",
                                padding: 0,
                                margin: 0,
                            }}
                        />
                    </Grid>
                </Grid>


                {/* <Typography variant='h3' color="#505050" textAlign='center'>
                    About Us
                </Typography> */}

                <Typography sx={{ fontSize: 19 }} my={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ullamcorper rutrum lacus. Cras facilisis nisl a ultricies sollicitudin. Integer semper volutpat ipsum non gravida. Suspendisse accumsan, quam id tincidunt vehicula, metus lorem dapibus nibh, in rhoncus magna magna in neque. Duis ut ligula lorem. Nullam velit erat, tincidunt nec convallis vel, faucibus vel ante. Aenean condimentum pharetra malesuada. Nunc non gravida nisi.

                    Nullam a dui at diam aliquam rutrum. Nulla ut massa quis diam tincidunt dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sit amet enim sollicitudin, tincidunt erat rhoncus, congue mi. Mauris egestas lorem fermentum egestas aliquet. Cras pellentesque porttitor elit sed ultrices. Fusce sodales lacinia tortor sit amet malesuada. Curabitur nec mi risus. Etiam condimentum dui magna, nec tempor velit accumsan sed. Nullam lobortis libero ut tempor condimentum.

                    Duis vehicula ante ut justo vehicula, a finibus sapien tempus. Donec rhoncus lectus nunc, a tincidunt sem tristique vel. Vivamus volutpat risus ac tempus eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi massa purus, malesuada at porta non, lobortis a nisl. Donec vitae varius ante, in malesuada arcu. Sed ipsum mi, laoreet ut tortor sit amet, tincidunt ornare nunc. Integer posuere eros velit, ac aliquam nisl luctus sed. Fusce semper elementum velit, eu vestibulum ligula sodales a. Mauris consectetur vehicula maximus. Pellentesque risus lectus, convallis vitae scelerisque eu, suscipit a ipsum. Maecenas velit ipsum, efficitur a elit id, pellentesque imperdiet velit. Ut eleifend vel tellus eu vestibulum. Etiam vehicula urna vitae leo finibus vehicula.

                    Maecenas fringilla nibh ut est egestas convallis. Fusce porta nisl ac nibh sagittis egestas ac ac lectus. Cras dictum venenatis magna, nec rhoncus ex vulputate vel. Maecenas lorem ipsum, faucibus in nisl nec, dictum accumsan lorem. Etiam tempor imperdiet justo, ut dapibus sem facilisis sed. Curabitur malesuada facilisis massa, quis condimentum ipsum porta vitae. Proin dictum magna ipsum, id facilisis quam eleifend vitae. Aliquam purus diam, maximus sed commodo sed, aliquam sit amet nibh. Fusce convallis odio varius, interdum nisl id, posuere felis. Suspendisse placerat turpis magna, nec feugiat sapien varius ac.
                </Typography>
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

export default AboutUs