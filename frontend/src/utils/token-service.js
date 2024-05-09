//Author: Mohammed Noor ul Hasan Kothaliya

import Cookies from 'js-cookie'; 

class TokenService {
    getAccessToken() {
        return sessionStorage.getItem('accessToken');
    }

    setAccessToken(accessToken) {
        sessionStorage.setItem('accessToken', accessToken);
    }

    getRefreshToken() {
        return Cookies.get('refreshToken');
    }

    setRefreshToken(refreshToken) {
        Cookies.set('refreshToken', refreshToken, { expires: 7 }); // 7 days expiration
    }

    clearTokens() {
        sessionStorage.removeItem('accessToken');
        Cookies.remove('refreshToken');
    }
}

export default new TokenService();
