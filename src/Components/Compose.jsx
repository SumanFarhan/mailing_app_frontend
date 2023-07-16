import React from 'react'
import Modal from '@mui/material/Modal';
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
import Mail_animation from '../Images/Mail_animation.json'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotesIcon from '@mui/icons-material/Notes';

const defaultTheme = createTheme();
const Compose = ({ open, handleClose }) => {   
  return (
    <>
        <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          backgroundColor: '#fff',
          padding: '20px',
        }}
      >

        <Grid container >
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
                            <TextField
                                    margin="normal"
                                    fullWidth
                                    label="To"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Subject"
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    label="Compose Email"
                                />
                        </Grid>
                        <Button variant="contained" className='compose' onClick={handleClose} style={{marginRight:'20px'}}>
          Send 
        </Button>
        <Button variant="contained" className='compose' onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>
    </>
  )
}

export default Compose