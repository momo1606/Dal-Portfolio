//Author: Mohammed Noor ul Hasan Kothaliya

import React, { useState } from 'react';
import {
    Box, Button, Container, FormControl, FormHelperText, InputLabel, OutlinedInput,
    Typography, Paper, InputAdornment, IconButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Grid from '@mui/material/Grid';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from "pages/Home/Footer";
import { POST } from 'utils/axios';
import tokenService from 'utils/token-service';

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

const ResetPassword = () => {
    const { username, resetToken } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ password: '', confirmPassword: '' });


    const validatePasswordRequirements = (password: any) => {
        return {
            hasEightCharacters: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            hasNumber: /[0-9]/.test(password),
        };
    };

    const passwordRequirements = validatePasswordRequirements(password);

    const validatePassword = (password: any) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleResetPassword = async (e: any) => {
        e.preventDefault();

        if (!validatePassword(password)) {
            setErrors({ ...errors, password: 'Password does not meet requirements.' });
            return;
        }

        if (password !== confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match.' });
            return;
        }

        try {
            const response = await POST('/api/user/reset-password', {
                username,
                resetToken,
                newPassword: password
            });
            console.log('Password reset response:', response.data);
            tokenService.clearTokens();
            navigate('/login', { state: { message: 'Password reset successful. Please log in.' } });
        } catch (error: any) {
            console.error('Error resetting password:', error);
            setErrors({...errors, password: error.response?.data?.message || error.message});
    
        }
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownPassword = (event: any) => event.preventDefault();

    const passwordRequirementChecklist = validatePasswordRequirements(password);

    return (
        <Box className={classes.mainBox}>
            <Container component="main" maxWidth="xs" className={classes.container}>
                <Paper elevation={3} className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Reset Password
                    </Typography>
                    <form className={classes.form} onSubmit={handleResetPassword}>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel htmlFor="password">New Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="New Password"
                                error={!!errors.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {errors.password && <FormHelperText error>{errors.password}</FormHelperText>}
                        </FormControl>

                        <Box className={classes.passwordRequirements}>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirements.hasEightCharacters ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} 8 characters
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirements.hasUpperCase ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} One uppercase
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirements.hasSpecialChar ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} One special char
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" className={classes.requirementText}>
                                        {passwordRequirements.hasNumber ? <CheckCircleIcon color="success" /> : <CancelIcon color="error" />} One number
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <FormControl fullWidth margin="normal" variant="outlined">
                            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                label="Confirm Password"
                                error={!!errors.confirmPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Reset Password
                        </Button>
                    </form>
                </Paper>
            </Container>
            <Footer />
        </Box>
    );
};

export default ResetPassword;
