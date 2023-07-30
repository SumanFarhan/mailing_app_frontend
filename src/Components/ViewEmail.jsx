import { Box, Typography, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { emptyProfilePic } from './Constant';
import { ArrowBack, Delete } from '@mui/icons-material';
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls';
import Grid from '@mui/material/Grid';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotesIcon from '@mui/icons-material/Notes';
import Avatar from '@mui/material/Avatar';

const IconWrapper = styled(Box)({
  padding: 15
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex',
  color: '#392C7E'
})

const Indicator = styled(Box)`
    font-size: 12px !important;
    background: #ddd;
    color: '#392C7E';
    border-radius: 4px;
    margin-left: 6px;
    padding: 2px 4px;
    align-self: center;
`;

const Image = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  margin: '5px 10px 0 10px',
  backgroundColor: '#cccccc'
});

const Container = styled(Box)({
  marginLeft: 15,
  width: '100%',
  '& > div': {
    display: 'flex',
    '& > p > span': {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }
});

const Date = styled(Typography)({
  margin: '0 50px 0 auto',
  fontSize: 12,
  color: '#392C7E'
})

const ViewEmail = () => {

  const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

  const { state } = useLocation();
  const { email } = state;

  const deleteEmail = () => {
    moveEmailsToBin.call([email._id])
    window.history.back()
  }

  return (
    <>
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
      <Box>
        <IconWrapper>
          <ArrowBack fontSize='small' color="action" onClick={() => window.history.back()} />
          <Delete fontSize='small' color="action" style={{ marginLeft: 40 }} onClick={deleteEmail} />
        </IconWrapper>
        <Subject>{email.subject} <Indicator component="span">Inbox</Indicator></Subject>
        <Box style={{ display: 'flex' }}>
          <Image src={emptyProfilePic} alt="profile" />
          <Container>
            <Box>
              <Typography>
                {email.to.split('@')[0]}
                <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
              </Typography>
              <Date>
                {(new window.Date(email.date)).getDate()}&nbsp;
                {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}&nbsp;
                {(new window.Date(email.date)).getFullYear()}
              </Date>
            </Box>
            <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default ViewEmail;