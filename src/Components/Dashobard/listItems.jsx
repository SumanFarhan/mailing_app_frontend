import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForwardIcon from '@mui/icons-material/Forward';
import InboxIcon from '@mui/icons-material/Inbox';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link} from 'react-router-dom';


const Listitems = ({ location }) => {

  const isEmailTypeActive = (emailtype) =>
    location.pathname.includes(`/main/emails/${emailtype}`);



  return (
    <>
      <ListItemButton
       component={Link}
       to="/main/emails/allmail"
       sx={{
         background: isEmailTypeActive('allmail') ? 'grey' : 'inherit',
         borderRadius: '5px',
         color: isEmailTypeActive('allmail') ? 'white' : 'inherit'
       }}
      >
        <ListItemIcon>
          <DashboardIcon sx={{ color: isEmailTypeActive('allmail') ? 'white' : 'inherit' }}/>
        </ListItemIcon>
        <ListItemText primary="All Mail" />
      </ListItemButton>

      {/* inbox */}
      <ListItemButton
        component={Link}
        to="/main/emails/inbox"
        sx={{
          background: isEmailTypeActive('inbox') ? 'grey' : 'inherit',
          borderRadius: '5px',
          color: isEmailTypeActive('inbox') ? 'white' : 'inherit'
        }}
      >
        <ListItemIcon>
          <InboxIcon sx={{ color: isEmailTypeActive('inbox') ? 'white' : 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>

      {/* starred */}
      <ListItemButton
        component={Link} to="/main/emails/starred"
        sx={{
          background: isEmailTypeActive('starred') ? 'grey' : 'inherit',
          borderRadius: '5px',
          color: isEmailTypeActive('starred') ? 'white' : 'inherit'
        }}
      >
        <ListItemIcon>
          <StarBorderIcon sx={{ color: isEmailTypeActive('starred') ? 'white' : 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>

      {/* sent */}
      <ListItemButton
        component={Link}
        to="/main/emails/sent"
        sx={{
          background: isEmailTypeActive('sent') ? 'grey' : 'inherit',
          borderRadius: '5px',
          color: isEmailTypeActive('sent') ? 'white' : 'inherit'
        }}
      >
        <ListItemIcon>
          <ForwardIcon sx={{ color: isEmailTypeActive('sent') ? 'white' : 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Sent" />
      </ListItemButton>

      {/* draft */}
      <ListItemButton
        component={Link}
        to="/main/emails/drafts"
        sx={{
          background: isEmailTypeActive('drafts') ? 'grey' : 'inherit',
          borderRadius: '5px',
          color: isEmailTypeActive('drafts') ? 'white' : 'inherit'
        }}
      >
        <ListItemIcon>
          <DraftsIcon sx={{ color: isEmailTypeActive('drafts') ? 'white' : 'inherit' }} />
        </ListItemIcon>
        <ListItemText primary="Draft" />
      </ListItemButton>

      {/* trash */}
      <ListItemButton
        component={Link}
        to="/main/emails/bin"
        sx={{
          background: isEmailTypeActive('bin') ? 'grey' : 'inherit',
          borderRadius: '5px',
          color: isEmailTypeActive('bin') ? 'white' : 'inherit'
        }}
      >
        <ListItemIcon>
          <DeleteIcon sx={{ color: isEmailTypeActive('bin') ? 'white' : 'inherit' }} />
        </ListItemIcon >
        <ListItemText primary="Trash" />
      </ListItemButton>

    </>
  )
}

export default Listitems