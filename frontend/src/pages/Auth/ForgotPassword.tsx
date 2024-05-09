//Author: Mohammed Noor ul Hasan Kothaliya

import React, { useState } from 'react';
import {
    Box, Button, Container, FormControl, InputLabel, OutlinedInput, Typography, Paper, FormHelperText,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Footer from "pages/Home/Footer";
import { POST } from 'utils/axios';


const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', 
        minHeight: '100vh', 
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    paper: {
        marginTop: '2px',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px',
        '@media (max-width: 600px)': {
            padding: '15px',
            marginTop: '0',
            marginBottom: '16px',
            maxWidth: '90%',
            boxShadow: '0 2px 4px 1px rgba(0, 0, 0, 0.2)',
        },
    },
    form: {
        width: '100%',
        marginTop: "4px",
    },
    submit: {
        marginTop: "4px",
    },
}));

const ForgotPassword = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [openDialog, setOpenDialog] = useState(false); 

    const validateEmail = (email: any) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.endsWith('@dal.ca');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address ending with @dal.ca.');
        } 
        else {
            setError('');
            try {
                const response = await POST('/api/user/forgot-password', { email });
                console.log('Response:', response.data);
                setOpenDialog(true); 
            } catch (error: any) {
                console.error('Error:', error);
                setError(error.response?.data?.message || error.message)
            }
        }
    };

    const handleClose = () => {
        setOpenDialog(false);
        navigate('/'); 
    };

    return (
        <Box className={classes.mainBox}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Paper elevation={3} className={classes.paper}>
            
                    <Typography component="h6" variant="h6">
                    Enter Dal Portfolio registered email address to receive password reset link
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <OutlinedInput
                                id="email"
                                name="email"
                                type="email"
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={Boolean(error)}
                                autoComplete="email"
                            />
                            <FormHelperText error>{error}</FormHelperText>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Send Reset Link
                        </Button>
                    </form>

                    <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Email Sent</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A password reset link has been sent to your registered email address which will expire in 1 hour. Please check your inbox.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default ForgotPassword;
