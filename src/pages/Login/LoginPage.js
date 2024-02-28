import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
// import './LoginPage.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment'


const LoginPage = ()=>{

    const {login} = useContext(AuthContext);
    const [formData, setFormData] = useState({password: '', username:''});

    const [loading, setLoading] =  useState(false)


    const handleInputChange=(e)=>{
        // Update the corresponding form field value in the state
        setFormData({...formData, [e.target.name]:e.target.value})

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        // during the submission, we set the loading to true
        setLoading(true)
        try {
            await login(formData)
            
        } catch (error) {
            console.error("Logging in fails: "+ error);
        }
        setLoading(false)

    }
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
    <Container component="main" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <CssBaseline />

        <Grid container spacing={0} >
            <Grid item xs={6} sx={{ my: 0 }}>
                <Paper sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: '100%',
                    height: '100%',
                    flexGrow: 1,
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
                        Welcome to Shop App
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email@mail.com"
                            autoComplete="email"
                            variant="standard"
                            autoFocus
                        />
                        <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Password</span>
            <Link href="#" variant="body2" color="inherit" sx={{ marginLeft: 'auto' }}>
                Forgot?
            </Link>
        </Box>
    }
    type="password"
    id="password"
    variant="standard"
    autoComplete="current-password"
/>
<TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    variant="standard"
    autoComplete="current-password"
    InputProps={{
        endAdornment: (
            <InputAdornment position="end" sx={{ marginRight: '8px' }}>
                <Link href="#" variant="body2" color="inherit">
                    Forgot?
                </Link>
            </InputAdornment>
        )
    }}
/>


                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            variant="standard"
                            autoComplete="current-password"
                        /> */}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: "gold" }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6} sx={{ my: 0 }}>
                <Paper sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: '100%',
                    height: '100%',
                    flexGrow: 1,
                    backgroundColor: '#FAF096',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FormControlLabel
                        control={<Typography variant="h1" color="#000000" sx={{ fontWeight: '900', fontSize: '4rem' }} />}
                        label="Shop App"
                    />
                    <ButtonBase sx={{}}>
                        <Img alt="logo" src="./Vector.png" />
                    </ButtonBase>
                </Paper>
            </Grid>
        </Grid>
    </Container>
</ThemeProvider>

       );
}


export default LoginPage;