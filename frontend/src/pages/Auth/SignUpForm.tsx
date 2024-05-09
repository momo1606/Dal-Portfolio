//Author: Mohammed Noor ul Hasan Kothaliya

import Footer from "pages/Home/Footer";
import React, { useState } from 'react';
import {
    useTheme, useMediaQuery,
    Box, Button, Container, FormControl, FormHelperText, InputLabel, OutlinedInput,
    Typography, Stack, Paper, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { POST } from '../../utils/axios';
import { useParams, useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme: any) => ({

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    paper: {
        marginTop: '2px',
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

    passwordRequirements: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '2px',
        // marginTop: theme.spacing(1),
    },
    requirementText: {
        display: 'flex',
        alignItems: 'center',
    },
    requirementIcon: {
        fontSize: '1rem',
        marginLeft: '10px',
        // theme.spacing(0.5)
    },
}));


const validatePasswordRequirements = (password: string) => {
    const hasEightCharacters = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$&*]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return {
        hasEightCharacters,
        hasUpperCase,
        hasSpecialChar,
        hasNumber,
    };
};

const SignUpForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const userTypes = [
        "Student",
        "Alumni",
        "Faculty",
        "Researcher"
    ];

    const [openDialog, setOpenDialog] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: '',
        firstName: '',
        lastName: '',
    });

    console.log(formData);

    const [errors, setErrors] = useState<any>({});

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


    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrors({
                ...errors,
                password: 'Please follow the below checklist to create a Strong Password.'
            });
        } else {
            setErrors({ ...errors, password: '' });
        }
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        if (name === 'email') {
            validateEmail(value);
        } else if (name === 'password' || name === 'confirmPassword') {
            validatePassword(value);
        }
        if (name === 'username') {
            const isValid = /^[a-zA-Z0-9]+$/.test(value);
            if (!isValid) {
            setErrors({ ...errors, username: 'Username should only contain letters and numbers.' });
            } else {
            setErrors({ ...errors, username: '' });
            }
        }


        if (name === 'confirmPassword') {
            if (formData.password !== value) {
                setErrors({ ...errors, confirmPassword: 'Passwords do not match.' });
            } else {
                setErrors({ ...errors, confirmPassword: '' });
            }
        }
    };


  

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
        const usernameRegex = /^[a-zA-Z0-9]+$/;

        if (!formData.email.endsWith('@dal.ca') || !emailRegex.test(formData.email)) {
            setErrors({ ...errors, email: 'Please enter a valid Dalhousie University email.' });
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            setErrors({ ...errors, password: 'please follow the below checklist to create a strong password.' });
            return;
        }
        if (!usernameRegex.test(formData.username)) {
            setErrors({ ...errors, username: 'Username should only contain letters and numbers.' });
            return;
        }


        if (formData.password !== formData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match.' });
            return;
        }


        const registrationData = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            profile: {
                first_name: formData.firstName,
                last_name: formData.lastName
            },
            type: "user" 
        };
    
        setLoading(true);
        try {
            const response = await POST('/api/user/register', registrationData);
            setLoading(false);
            // Registration successful
            setOpenDialog(true);
            console.log(response.data.message);
        } catch (error: any) {
            setLoading(false);
            const resultMessage = error.response?.data?.resultMessage?.en;
            if (error.response?.status === 409) {
                if (error.response?.data?.resultCode === '00032') {
                    setErrors({ ...errors, username: resultMessage });
                } else if (error.response?.data?.resultCode === '00033') {
                    setErrors({ ...errors, email: resultMessage });
                }
            } else {
                setErrors({ ...errors, form: resultMessage || 'Registration failed, please try again.' });
            }
        }
    };

    const passwordRequirementChecklist = validatePasswordRequirements(formData.password);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }} >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className={classes.container}>
                <Paper component="main" elevation={3} sx={{ p: isMobile ? 2 : 4, mb: 4 }} className={classes.paper}>

                    <Typography component="h3" variant="h5">
                        Join the Dal Community!
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="firstName">First Name</InputLabel>
                            <OutlinedInput id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} label="First Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="lastName">Last Name</InputLabel>
                            <OutlinedInput id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} label="Last Name" />
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput id="username" name="username" value={formData.username} onChange={handleChange} label="Username" error={!!errors.username} />
                            {errors.username && <FormHelperText error>{errors.username}</FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput id="email" name="email" value={formData.email} onChange={handleChange} label="Email" error={!!errors.email} />
                            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                        </FormControl>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
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
                                error={!!errors.password}
                            />
                            {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                        </FormControl>

                        <Box className={classes.passwordRequirements}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasEightCharacters ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        8 characters
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasUpperCase ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        An uppercase
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasSpecialChar ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A special character
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirementChecklist.hasNumber ? <CheckCircleIcon className={classes.requirementIcon} color="success" /> : <CancelIcon className={classes.requirementIcon} color="error" />}
                                        A number
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>


                        <FormControl fullWidth margin="normal" required>
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                label="Confirm Password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                error={!!errors.confirmPassword}
                            />
                            {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
                        </FormControl>



                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Create Account
                        </Button>
                        {loading && <CircularProgress />}

                    </form>

                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Verify Your Email</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please check your inbox for the verification link. If verification is done, proceed to login.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Close</Button>
                            <Button onClick={() => {navigate('/login'); }}>Login</Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
            <Footer />

        </div>
    );
};

export default SignUpForm;
