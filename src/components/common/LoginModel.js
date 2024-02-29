// LoginModal.js

// Fix the user Info once successfully
// Then add the <Prodts>
// Also add the toasts for login failure or successfully 

import React, { useState, useContext } from "react";
// import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
import authService from "../../apis/authService";
import {Modal, Container, CssBaseline, Grid, Paper, Typography, Box, TextField, Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AuthContext } from "../../context/AuthContext";


const LoginModal = ({ isOpen, closeModal  }) => {
    const navigate = useNavigate(); 

     
    const { login } = useContext(AuthContext);
    // console.log("Login___________________---->",login);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        
        try {
            const { token, user, role } = await authService.login({ username, password });
            // const { token, user } = await login({ username, password });
        
            console.log(" token in model:+++++===", token);
            // Optionally, you can store the token in localStorage for persistent authentication
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user)); // Convert user object to string before saving
            localStorage.setItem("role", JSON.stringify(role)); // Convert user roles

            // update the properties
            handleLogin(token, user, role)
            // Redirect user to desired page (e.g., "/product") after successful login
            navigate('product'); 

            closeModal(); // Close the modal after successful login
            
            return; // Exit the function after successful login
        } catch (error) {
            console.error("Login failed:", error);
            // setError("Login failed: " + error.message);
            if (error.response && error.response.status === 401) {
                closeModal(); // Close the modal after successful login

            } else {
                setError("Login failed: " + error);
            }
            
        }
    };


    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    return (

        <>
                  {/* isOpen={isOpen} onRequestClose={closeModal} */}
        <Modal
        open={isOpen}
        onClose={closeModal }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
            {/* <ThemeProvider theme={createTheme()}> */}
                <Container component="main" sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <CssBaseline />
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Paper sx={{ p: 2, margin: 'auto', maxWidth: '100%', height: '100%', flexGrow: 1, backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                                    Welcome to Shop App
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Email"
                                        autoComplete="email"
                                        autoFocus
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="button"
                                        onClick={handleLogin}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper sx={{ p: 2, margin: 'auto', maxWidth: '100%', height: '100%', flexGrow: 1, backgroundColor: '#FAF096', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h1" color="#000000" sx={{ fontWeight: '900', fontSize: '4rem' }}>
                                    Shop App
                                </Typography>
                                <ButtonBase>
                                    <Img alt="logo" src="./Vector.png" />
                                </ButtonBase>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            {/* </ThemeProvider> */}
            {/* {error && <p>{error}</p>}
            <button onClick={closeModal}>Close</button> */}
        </Modal>
        </>

    );
};

export default LoginModal;
