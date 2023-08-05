import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Lottie from "lottie-react";
import Mail_animation from '../Images/Mail_animation.json'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotesIcon from '@mui/icons-material/Notes';
import { addSignupUser } from '../Redux/Reducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import logo from '../Images/logo.png'



const defaultTheme = createTheme();
const Signup = () => {

    const navigate = useNavigate();

    const handleLoginLinkClick = () => {
      navigate('/');
    };

    const dispatch = useDispatch()

    const [signedUp, setsignedUp] = useState({
        userName: "",
        email: "",
        password: ""

    });
    const Setting = (event) => {
        const { name, value } = event.target
        setsignedUp((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        dispatch(addSignupUser(signedUp))
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };



    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh', overflow: 'hidden' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={false}
                        md={7}
                        sx={{
                            backgroundColor: '#392C7E',
                            // display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px 20px',
                            position: 'relative',
                            display: { xs: 'none', sm: 'none', md: 'flex' }, // Hide on screens with width <= 619px
                        }}
                    >
                        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', position: 'absolute', top: '20px', left: '20px' }} />
                        <Lottie
                            animationData={Mail_animation}
                            loop={true}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                        />
                        <Typography component="h1" variant="h5" sx={{ color: 'grey', position: 'absolute', bottom: '30px', textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: '34px' }}>
                            VERNECULAR INBOX
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item sx={{ display: 'flex' }}>
                                <Avatar sx={{ m: 1, width: 28, height: 28, bgcolor: '#392C7E' }}>
                                    <KeyboardVoiceIcon />
                                </Avatar>
                                <Avatar sx={{ m: 1, width: 28, height: 28, bgcolor: '#392C7E' }}>
                                    <NotesIcon />
                                </Avatar>
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5" className='logoHeading'>
                                REGISTRATION
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="userName"
                                    id="userName"
                                    label="User Name"
                                    autoFocus
                                    onChange={Setting}
                                    value={signedUp.userName}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={Setting}
                                    value={signedUp.email}
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    onChange={Setting}
                                    value={signedUp.password}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                    </Grid>
                                    <Grid item>
                                        <div onClick={handleLoginLinkClick}>
                                            <Link to="/">Already have an account? Sign In</Link>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default Signup