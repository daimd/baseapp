// axiosInstance

import  axios   from "axios";
import { BASE_URL } from "../apis/apis";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { isTokenExpired } from "./tokenUtils";
import authService from "../apis/authService";


const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    headers: {
        'Content-Type':'application/json'},
    });

axiosInstance.interceptors.request.use( 
    async (request)=>{
        const { token, refreshToken } = useContext(AuthContext); // Access token and refresh token from AuthContext

        if(token){
            request.headers.Authorization = `Bearer  ${token}`;
        }
        // check if access token is expired and then refresh it
        if(isTokenExpired(token) && refreshToken){
            try {
                const newAccessToken = await authService.refreshAccessToken(refreshToken)
                request.headers.Authorization = `Bearer ${newAccessToken}`;

                //TODO: Optionally update token in AuthContext or localStorage
                
            } catch (error) {
                console.error('Error refreshing access token:', error);
                // TODO: Redirect user to  login page or  display error message dialog model
                throw new Error('Failed to refresh token. Please login again.');
            }
        }
            return request;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    async (responseError)=>{
        const originalRequest =  responseError.config;

        if (responseError.response && responseError.response.status ===401 && !originalRequest._retry() ) {
            originalRequest._retry = true;
            localStorage.clear();
            try {
                // Attempt to refresh token
                const refreshToken = await authService.refreshAccessToken();

                // Update authorization header with new token
                originalRequest.headers.Authorization = `Bearer ${refreshToken}`;

                return axiosInstance(originalRequest)
            } catch (refreshError) {
                console.error('Error refreshing access token:', refreshError);
                // Redirect user to login page or display a message
                throw new Error('Failed to refresh token. Please login again.');
            }
        }
        return Promise.reject(responseError);

    }

);

export default axiosInstance;



