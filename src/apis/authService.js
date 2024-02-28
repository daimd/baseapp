// authService.js

import { loginApi, refreshTokenApi } from './apis'; // Import API endpoints for login and token refreshing
import configureAxiosInstance from '../utils/axiosInstance'; // Import Axios instance
import { decodeToken, isTokenExpired } from '../utils/tokenUtils';; // Import token utilities

// Call the configureAxiosInstance function to create an instance with access token and refresh token
const axiosInstance = configureAxiosInstance();
const authService = {
  
  // Function to authenticate user and obtain access token
  login: async (credentials) => {
    try {
        console.log(" The credentials : ",credentials);
      // Make an HTTP request to your login endpoint
      const response = await axiosInstance.post(loginApi, credentials)
      // Extract and store the access token adn user data in authContext from the response
      console.log("The response data:", response.data); 

      // const { token } = response.data;
      const token = response.data.token;
      if (!token) {
        console.error("No token received from backend!! ");
        throw new Error('Token not found in response');
      }
      
      console.log(" The token received at login : ",token);
      // Check if the access token is expired
      if (isTokenExpired(token)) {
        throw new Error('Access token is expired');
      }

      // Optionally decode the token to extract user information
      const user = decodeToken(token);

      return { token, user }; // Return token and user data
    } catch (error) {
      console.log("******************",error);
      throw new Error('Sorry we are failing to log you in probable cause: ');
    }
  },

  // Function to refresh access token using refresh token
  refreshAccessToken: async (refreshToken) => {
    try {
      // Make an HTTP request to your token refreshing endpoint
      const response = await axiosInstance.post(refreshTokenApi, { refreshToken });

      // Extract the new access token from the response
      const { accessToken } = response.data;

      return accessToken; // Return the new access token
    } catch (error) {
      throw new Error('Token refresh failed: ' + error);
    }
  },

  // Function to logout user
  logout: () => {
    // Implement logout logic here, such as clearing tokens from local storage
    // You may also want to redirect the user to the login page or perform other cleanup tasks
  },
};

export default authService;


