import React from 'react'
import {
    Container,
    Grid, Typography,
    Divider, Box, TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,


}
    from '@mui/material';
import awholeyear from "../images/awholeyear.svg"

const Model = ( state ) => {

    

    const [open, setOpen] = React.useState(false);

    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>

            <Dialog
                open={open}
                onClose={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>

            {/* <Box
                
                display="flex"
                flexDirection={"column"}
                maxWidth={400}
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
            </Box> */}
        </div>
    )
}

export default Model