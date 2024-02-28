// axiosInstance.js

import axios from "axios";
import { BASE_URL } from "../apis/apis";
import { isTokenExpired } from "./tokenUtils";
import authService from "../apis/authService";

// Create a function to configure and return the Axios instance
const configureAxiosInstance = (accessToken, refreshToken) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
      
    },
  });

  // Add request interceptor
  instance.interceptors.request.use(
    async (request) => {
      if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`;
      }
      
      // Check if access token is expired and then refresh it
      if (isTokenExpired(accessToken) && refreshToken) {
        try {
          const newAccessToken = await authService.refreshAccessToken(refreshToken);
          request.headers.Authorization = `Bearer ${newAccessToken}`;
          // Optionally update token in localStorage
        } catch (error) {
          console.error('Error refreshing access token:', error);
          // Handle refresh error
          throw new Error('Failed to refresh token. Please login again.');
        }
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // Redirect the users to the login Model
      if (error.response.status === 401) {
          localStorage.clear()
          console.log('redirect login=======')
          if(window.location.pathname=== '/login' ) return
          window.location.pathname = '/login'
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default configureAxiosInstance;
