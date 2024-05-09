// Authors: Hatim Patrawala and Mohammed Noor ul Hasan Kothaliya
import axios, { AxiosRequestConfig } from "axios";
import history from "./history";
import tokenService from "./token-service";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = tokenService.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.url === "/api/user/logout") {
      config.data = { refreshToken: tokenService.getRefreshToken() };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      instance
        .post("/api/user/refresh-token", {
          refreshToken: tokenService.getRefreshToken(),
        })
        ?.then((res) => {
          const { accessToken, refreshToken } = res.data;
          tokenService.setAccessToken(accessToken);
          tokenService.setRefreshToken(refreshToken);
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        })
        ?.catch((err) => {
          console.error("Error refreshing token:", err);
          tokenService.clearTokens();
          history.replace("/login");
          return Promise.reject(err);
        });

      return instance(originalRequest);
    }
    return Promise.reject(error);
});

const GET = (url: string, options?: AxiosRequestConfig) => {
    return instance.get(url, options);
};

const POST = (url: string, data?: any, options?: AxiosRequestConfig) => {
    return instance.post(url, data, options);
};

const PUT = (url: string, data?: any, options?: AxiosRequestConfig) => {
    return instance.put(url, data, options);
};

const PATCH = (url: string, data?: any, options?: AxiosRequestConfig) => {
    return instance.patch(url, data, options);
};

const DELETE = (url: string, options?: AxiosRequestConfig) => {
    return instance.delete(url, options);
};

export { GET, POST, PUT, DELETE, PATCH };
