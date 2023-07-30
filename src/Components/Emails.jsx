import React, { useEffect, useState } from 'react';
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls';
import { useParams } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import { Box, List, Checkbox } from '@mui/material';
import Email from './Email'
import NoMails from './Nomail';
import {EMPTY_TABS} from './Constant';

const Emails = () => {

  const [starredEmail, setStarredEmail] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false)

  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const deleteEmailsService = useApi(API_URLS.deleteEmails);
  const moveEmailsToBin = useApi(API_URLS.moveEmailsToBin);

  const { type } = useParams();



  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen, starredEmail]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map(email => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  }

  const deleteSelectedEmails = () => {
    if (type === 'bin') {
      deleteEmailsService.call(selectedEmails);
    } else {
      moveEmailsToBin.call(selectedEmails);
    }
    setRefreshScreen(prevState => !prevState);
    setStarredEmail(prevState => !prevState);
  }

  return (
    <>
      <Box style={{ padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center' }}>
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutline  style={{color:'#392C7E'}} onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <Email
            key={email._id}
            email={email}
            setStarredEmail={setStarredEmail}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>
      {
        getEmailsService?.response?.length === 0 &&
        <NoMails message={EMPTY_TABS[type]} />
      }

    </>
  )
}

export default Emails