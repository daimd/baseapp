import { useState } from "react";
import Modal from "react-modal";
import authService from "../../apis/authService"; // Import authService for authentication
import configureAxiosInstance from "../../utils/axiosInstance"; /// Import axiosInstance for making authenticated requests

// Make sure to call configureAxiosInstance before making any axios requests
configureAxiosInstance();
const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setError(null); // Reset error state when closing the modal
  };

  const handleLogin = async (e) => {
    // e.preventDefault(); // Prevent default form submission , i.e this is necessary to handle the login process via JavaScript without a full page reload.

    try {
      // Call the login function from authService to authenticate the user
      const { token, user } = await authService.login({ username, password });

      // Set the token in configureAxiosInstance headers of subsequent authenticated requests
      console.log(" The token2 : ", localStorage.getItem("token"));
      console.log(" The User2 : ", user);

      if (configureAxiosInstance) {
        configureAxiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
      } else {
        console.error("configureAxiosInstance is not defined");
      }

      // Optionally, you can store the token in localStorage for persistent authentication
      localStorage.setItem("token", token);

      // Close the modal after successful login
      closeModal();

      // Optionally, you can redirect the user to a specific page
      // For example, after login, you might want to redirect them to the dashboard
      // You can use the history object or react-router-dom's useHistory hook for redirection
      // history.push('/dashboard');
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle login error (e.g., display error message to the user)
      setError("Login failed: " + error.message);
    }
  };

  return (
    <>
      <button onClick={openModal}>Login</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>{" "}
          {/* Change to type="button" */}
        </form>
        {error && <p>{error}</p>} {/* Display error message if login fails */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};
// Modal styling
const modalStyles = {
  content: {
    width: "50%",
    height: "50%",
    margin: "auto",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
};

export default LoginButton;
