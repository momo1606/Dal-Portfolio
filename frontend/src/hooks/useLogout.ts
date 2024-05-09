
//Author: Mohammed Noor ul Hasan Kothaliya

import { useNavigate } from 'react-router-dom';
import { useAppStore } from 'store/AppStore';
import tokenService from 'utils/token-service';
import { POST } from 'utils/axios';

const useLogout = () => {
    const navigate = useNavigate();
    const [, dispatch] = useAppStore();

    const logout = async () => {
        try {
            const refreshToken = tokenService.getRefreshToken();
            if (refreshToken) {
                await POST(`/api/user/logout`, { refreshToken });
            }
            tokenService.clearTokens();
            dispatch({ type: "LOG_OUT" });
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
            navigate('/login');
        }
    };

    return logout;
};

export default useLogout;
