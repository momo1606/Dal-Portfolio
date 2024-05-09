//Author: Mohammed Noor ul Hasan Kothaliya
import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import useLogout from 'hooks/useLogout';

const Logout = () => {
    const logout = useLogout();
    const [loggingOut, setLoggingOut] = useState(true);

    useEffect(() => {
        const performLogout = async () => {
            await logout();
            setLoggingOut(false);
        };

        performLogout();
    }, [logout]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            {loggingOut && (
                <>
                    <Typography variant="h6">Logging Out...</Typography>
                    <CircularProgress />
                </>
            )}
        </Box>
    );
};

export default Logout;
