import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotesIcon from '@mui/icons-material/Notes';
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls';


const Compose = ({ open, handleClose }) => {

  const sentEmailService = useApi(API_URLS.saveSentEmails);
  const saveDraftService = useApi(API_URLS.saveDraftEmails);

  const [data, setData] = useState({
    to: "",
    subject: "",
    body: ""
  });


  const config = {
    Username: "fypproject691@gmail.com",
    Password: "E92BC4958D4966F1A12F7BF7746D40F2A6F1",
    Host: "smtp.elasticemail.com",
    Port: 2525
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "finalyearproject275@gmail.com",
        Subject: data.subject,
        Body: data.body
      }).then(
        message => alert(message)
      );
    }

    const payload = {
      to: data.to,
      from: "finalyearproject275@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Mailing Application',
      starred: false,
      type: 'sent'
    }

    sentEmailService.call(payload)

    if (!sentEmailService.error) {
       setData({ to: "", subject: "", body: "" }); 
      handleClose();
    } else {

    }

  }


  const handleCloseModal = () => {
    const payload = {
      to: data.to,
      from: "finalyearproject275@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: '',
      name: 'Mailing Application',
      starred: false,
      type: 'drafts'
    }

    saveDraftService.call(payload);

    if (!saveDraftService.error) {
      setData({ to: "", subject: "", body: "" }); 
    } else {

    }
    handleClose();
  };

  const Setting = (event) => {
    const { name, value } = event.target
    setData((info) => {
      return {
        ...info,
        [name]: value
      }
    })
  }
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
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
              name="to" onChange={Setting}
              value={data.to}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Subject"
              name="subject" onChange={Setting}
              value={data.subject}
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              rows={10}
              variant="outlined"
              label="Compose Email"
              name="body"
              onChange={Setting}
              value={data.body}
            />
          </Grid>
          <Button variant="contained" className='compose' onClick={(e) => sendEmail(e)} style={{ marginRight: '20px' }}>
            Send
          </Button>
          <Button variant="contained" className='compose' onClick={handleCloseModal}>
            Close
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default Compose