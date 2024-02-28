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
      
      // .then((data)=>{

      // })
      // .catch((error)=>{

      // })
      console.log(" The response ***************: ",response);
      // Extract the access token from the response
      const { token } = response.data;
      console.log(" The token1 : ",token);
      // Check if the access token is expired
      if (isTokenExpired(token)) {
        throw new Error('Access token is expired');
      }

      // Optionally decode the token to extract user information
      const user = decodeToken(token);

      return { token, user }; // Return token and user data
    } catch (error) {
      console.log("******************",error);
      throw new Error('Sorry Login failed: ');
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


