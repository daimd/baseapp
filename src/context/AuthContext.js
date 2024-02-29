// The AuthContext /Provider

import React, { createContext, useEffect, useState } from 'react';
import authService from '../apis/authService'; // Import the authService for handling authentication
import { decodeToken, validateToken } from '../utils/tokenUtils'; // Import token utilities for decoding and validating tokens
import { Navigate } from 'react-router-dom'; 
// import   configureAxiosInstance  from '../utils/axiosInstance'; // Import the configureAxiosInstance function

// Create the AuthContext to share authentication state and functions with other components
export const AuthContext = createContext();

// Make sure to call configureAxiosInstance before making any axios requests
// configureAxiosInstance();
// AuthProvider component responsible for managing authentication state and providing authentication-related functions
export const AuthProvider = ({ children }) => {
 
  // Define state variables for user, roles, and token
  const [user, setUser] = useState(null);
  const [roles, setRoles] = useState([]);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Effect hook to run once on component mount. This is to support scenarios where the user may have a valid token
  //  stored in localStorage from a previous session and you want to automatically authenticate them based on that
  //  token when they revisit your application
useEffect(() => {
  const checkStoredToken = async () => {
    // Check if a token is stored in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const { token, user, role } = await authService.validateToken(storedToken);
        // Call setUserAndRolesFromLoginResponse with the received token, user, and role
        setUserAndRolesFromLoginResponse(token, user, role);
      } catch (error) {
        // Handle token validation error or expired token
        console.error('Error validating token:', error);
        // Clear localStorage and reset authentication state
        localStorage.removeItem('token');
        setUser(null);
        setRoles([]);
        setToken(null);
      }
    }
    setIsLoading(false);
  };

  checkStoredToken();

}, []);


  // Function to handle user login
  const handleLogin = async (credentials) => {
    try {
      const { token, user, role } = await authService.login(credentials);
      console.log(user);
      console.log(role);
      // Call setUserAndRolesFromLoginResponse with the received token, user, and role
    setUserAndRolesFromLoginResponse(token, user, role);
      return { token, user, role }; // Return token, user, and role
    } catch (error) {
      console.error('Error Logging in: ' + error);
      // TODO: Handle login error (e.g., display error message to user)
    }
  };

    // Function to set user and roles from login response data
  const setUserAndRolesFromLoginResponse = (token, user, roles) => {
      try {
        // Set user, roles, and token
        setUser(user);
        setRoles(roles);
        setToken(token);
      } catch (error) {
        console.error('Error setting user and roles:', error);
        // Handle any error that occurs while setting user and roles
      }
  };

  // Function to handle user logout
  const handleLogout = async () => {
     // Set token in axiosInstance headers for authenticated requests
     try {
      // const axiosInstance = configureAxiosInstance();
      await authService.logout();
      // if (configureAxiosInstance) {
      //   delete configureAxiosInstance.defaults.headers.common['Authorization'];
      // }
      // Clear user, roles, and token from state
      setUser(null);
      setRoles([]);
      setToken(null);
  } catch (error) {
    console.error('Logout failed:', error.message);
  }
  };

  // Function to check if user is authenticated
  // If token is falsy (e.g., null, undefined, false, 0, ""), then !token evaluates to true.
  const isAuthenticated = () => {
    return !!token;
  };

// Provide auth-related data and functions to child components through AuthContext
  return (
    <AuthContext.Provider value={{ user, roles, token, login: handleLogin, logout: handleLogout }}>
      {!isLoading ? (
        isAuthenticated() ? (
          children // This will render children only if the user is authenticated
        ) : (
          <Navigate to="/login" /> // If user is not authenticated, redirect to login page
        )
      ) : (
        <div>Loading...</div> // Render loading state while checking authentication status
      )}
    </AuthContext.Provider>
  );
};
