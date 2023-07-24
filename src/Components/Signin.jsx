import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Lottie from "lottie-react";
import Mail_animation from '../Images/Mail_animation.json'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotesIcon from '@mui/icons-material/Notes';
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addLoginUser } from '../Redux/Reducer'



const defaultTheme = createTheme();
const Signin = () => {

    const dispatch = useDispatch()
    const DashboardCheck = useSelector(state => state.user.redirectToDashboard)
    const navigate = useNavigate()

    const [signIn, setSignIn] = useState({
        email: "",
        password: "",
    });

    const Setting = (event) => {
        const { name, value } = event.target
        setSignIn((data) => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if (DashboardCheck) {
            navigate("/main");
        }
    }, [DashboardCheck])

    const handleSubmit =(event) => {
            dispatch(addLoginUser(signIn))
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
                        sm={4}
                        md={7}
                        sx={{
                            backgroundColor: 'black',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                        }}
                    >
                        <Lottie
                            animationData={Mail_animation}
                            loop={true}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Grid container>
                            <Grid item xs>
                            </Grid>
                            <Grid item sx={{ display: 'flex' }}>
                                <Avatar sx={{ m: 1, width: 28, height: 28, bgcolor: 'black' }}>
                                    <KeyboardVoiceIcon />
                                </Avatar>
                                <Avatar sx={{ m: 1, width: 28, height: 28, bgcolor: 'black' }}>
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
                                MAILING APPLICATION
                            </Typography>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={Setting}
                                    value={signIn.email}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={Setting}
                                    value={signIn.password}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                                    </Grid>
                                    <Grid item>
                                        <Link to="/" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
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

export default Signin