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
      const originalRequest = error.config;

      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        localStorage.clear();
        try {
          // Attempt to refresh token
          const newRefreshToken = await authService.refreshAccessToken();
          // Update authorization header with new token
          originalRequest.headers.Authorization = `Bearer ${newRefreshToken}`;
          // Retry the original request
          return instance(originalRequest);
        } catch (refreshError) {
          console.error('Error refreshing access token:', refreshError);
          // Handle refresh error
          throw new Error('Failed to refresh token. Please login again.');
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default configureAxiosInstance;
