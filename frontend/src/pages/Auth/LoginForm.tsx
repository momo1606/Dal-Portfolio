//Author: Mohammed Noor ul Hasan Kothaliya

import React, { useState } from 'react';
import {
    useTheme, useMediaQuery,
    Box, Button, Container, FormControl, FormHelperText, InputLabel, OutlinedInput,
    Typography, Paper, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Footer from "pages/Home/Footer";
import { POST } from '../../utils/axios';  
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSessionAPI } from 'utils/session';
import { useAppStore } from 'store';
import { useToast } from "hooks";
import { CircularProgress } from '@mui/material';


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
        marginTop: '10px',
    },
    submit: {
        margin: '10px 0',
    },
}));

const LoginForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    const navigate = useNavigate();
    const [state, dispatch] = useAppStore();
    const { showSuccess } = useToast();
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<any>({});
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors({ ...errors, email: 'Please enter a valid email address ending with @dal.ca.' });
        } else if (!email.endsWith('@dal.ca')) {
            setErrors({ ...errors, email: 'Please enter a valid email address ending with @dal.ca.' });
        } else {
            setErrors({ ...errors, email: '' });
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });



        if (name === 'email') {
            validateEmail(value);
        }
        
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

        if (!formData.email.endsWith('@dal.ca') || !emailRegex.test(formData.email)) {
            setErrors({ ...errors, email: 'Please enter a valid Dalhousie University email.' });
            return;
        } 

        setLoading(true);
     
        try {
            const response = await POST('/api/user/login', {
                email: formData.email,
                password: formData.password
            }).then((response) => {
                const { accessToken, refreshToken, message } = response.data;
                sessionStorage.setItem('accessToken', accessToken);
                Cookies.set('refreshToken', refreshToken, { expires: 7 });
                fetchSessionAPI(dispatch)
                setLoading(false);
                showSuccess(message);
                
              });


            
           

            navigate('/');  
        } catch (error: any) {
            setLoading(false);
            const errorMessage = error.response?.data?.message || 'Login failed!';
            setErrors({ auth: errorMessage });
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <Box className={classes.mainBox}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Paper className={classes.paper}>
                    <Typography component="h3" variant="h5">Login</Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                label="Email"
                                error={!!errors.email}
                            />
                            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                label="Password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.auth}
                            />
                            {errors.auth && <FormHelperText error>{errors.auth}</FormHelperText>}
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        {loading && <CircularProgress />}
                        <Box textAlign="center">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </Box>
                        <Box textAlign="center" mt={2}>
                            <Typography variant="body2">
                                Don't have an account? <Link to="/signup">Register</Link>
                            </Typography>
                        </Box>
                    </form>
                </Paper>
                
            </Container>
            <Footer />
        </Box>
    );
};

export default LoginForm;


