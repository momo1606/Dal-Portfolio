//Author: Mohammed Noor ul Hasan Kothaliya

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET } from '../../utils/axios';

const EmailVerificationPage = () => {
    const { username, verificationCode } = useParams();
    const navigate = useNavigate();
    const [isVerified, setIsVerified] = useState(false); 

    useEffect(() => {
        const verifyEmail = async () => {
            if (isVerified) {
                return;
            }

            const url = `/api/user/verify-email/${username}/${verificationCode}`;
            console.log('Verifying email with URL:', url);
    
            try {
                const response = await GET(url);
                console.log('Verification response:', response.data);
    
                if (response.status === 200) {
                    alert('Email verified successfully, Proceed to Login');
                    setIsVerified(true); 
                    navigate('/login');
                } else {
                  //  alert(`Error: ${response.data.message}`);
                    navigate('/login');
                }
            } catch (error: any) {
                console.error('Error verifying email:', error);
                //alert(`Error verifying email: ${error.response?.data?.message || error.message}`);
                navigate('/login');
            }
        };
    
        if (!isVerified) {
            verifyEmail();
        }
    }, [username, verificationCode, navigate, isVerified]);

    return (
        <div>
            <h1>Verifying your email...</h1>
        </div>
    );
};

export default EmailVerificationPage;
