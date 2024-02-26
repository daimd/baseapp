// utils/tokenUtils.js

// Todo: Function to decode a JWT token and return the payload
export  const decodeToken = (token) =>{
    // Split the token into header, payload and signature
    const [header, payload , signature] = token.split('.');

    // decode the payload (Using base64 and parsing JSON)
    const decodedPayload = JSON.parse(atob(payload));

    return decodedPayload;    
}

// Function to check if a token is expired
export const isTokenExpired = (token) => {
    if (!token) return true; // Token does not exist or is invalid
    const decodedToken = decodeToken(token);
    if (!decodedToken.exp) return false; // Token does not have expiration time
    const expirationDate = new Date(decodedToken.exp * 1000);  // Convert expiration time to milliseconds
    return expirationDate < new Date(); // Compare expiration time with current time
};

// Function to validate a token
export const validateToken = (token) => {
    if (!token) return false;
    if (isTokenExpired(token)) return false;
    // Additional validation logic if needed
    return true;
  };


  
  
  
   
  
  