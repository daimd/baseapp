import React, { createContext, useEffect, useState } from 'react';
import authService from '../apis/authService'; // Import the authService for handling authentication
import { decodeToken, validateToken } from '../utils/tokenUtils'; // Import token utilities for decoding and validating tokens
import { Navigate } from 'react-router-dom'; 
import   configureAxiosInstance  from '../utils/axiosInstance'; // Import the configureAxiosInstance function

// Create the AuthContext to share authentication state and functions with other components
export const AuthContext = createContext();
// Make sure to call configureAxiosInstance before making any axios requests
configureAxiosInstance();
// AuthProvider component responsible for managing authentication state and providing authentication-related functions
export const AuthProvider = ({ children }) => {
 
  // Define state variables for user, roles, and token
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect hook to run once on component mount
  useEffect(() => {
    // Check if a token is stored in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Decode and set user and roles if token exists
      decodeTokenAndSetUserAndRoles(storedToken);
    }
    setIsLoading(false);
  }, []);

  // Function to handle user login
  const handleLogin = async (credentials) => {
    try {
      // Call the login function from authService to authenticate the user
      const { token: authToken, user: userData } = await authService.login(credentials);
      // Store the token in localStorage
      localStorage.setItem('token', authToken);
      // Decode and set user and roles using the received token
      decodeTokenAndSetUserAndRoles(authToken);
    } catch (error) {
      console.error('Error Logging in: ' + error);
      // TODO: Handle login error (e.g., display error message to user)
    }
  };

  // Function to decode JWT token and set user and roles
  const decodeTokenAndSetUserAndRoles = (storedToken) => {
    try {
      // Validate the stored token
      if (validateToken(storedToken)) {
        // Set token in axiosInstance headers for authenticated requests
        // const axiosInstance = configureAxiosInstance();

        // Decode the token payload
        const decodedPayload = decodeToken(storedToken);
        // Extract user and roles from decoded token
        const user = decodedPayload.user;
        const userRoles = decodedPayload.role || [];
        // Set user, roles, and token
        setUser(user);
        setRoles(userRoles);
        setToken(storedToken);

        console.log(" The roles roles and user ", user ,"with ", userRoles ,"roles");
         
        // Ensure configureAxiosInstance is defined before setting headers
        if (typeof configureAxiosInstance !== 'undefined' && configureAxiosInstance !== null) {
          configureAxiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        } else {
          console.error('configureAxiosInstance is not properly initialized.');
        }
      } 
      else {
          // Handle invalid token
          handleLogout();
        }
    } catch (error) {
      console.error('Error Decoding token:', error);
      // Handle token decoding error
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
     // Set token in axiosInstance headers for authenticated requests
    // const axiosInstance = configureAxiosInstance();
    // Remove token from localStorage
    localStorage.removeItem('token');
    if (configureAxiosInstance) {
      delete configureAxiosInstance.defaults.headers.common['Authorization'];
    }
    // Clear user, roles, and token from state
    setUser(null);
    setRoles([]);
    setToken(null);
  };

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    return !!token;
  };

  // Provide auth-related data and functions to child components through AuthContext
  return (
    <AuthContext.Provider value={{ user, roles, token, login: handleLogin, logout: handleLogout }}>
        {!isLoading ? (
        isAuthenticated() ? (
          // If user is authenticated, render children
          children
        ) : (
          // If user is not authenticated, redirect to login page
          <Navigate to="/login" />
        )
      ) : (
        // Render loading state while checking authentication status
        <div>Loading...</div>
      )}
      {children}
    </AuthContext.Provider>
  );
};