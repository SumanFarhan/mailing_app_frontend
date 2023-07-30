import { ListItem, Checkbox, Typography, Box, styled } from "@mui/material";
import { StarBorder, Star } from '@mui/icons-material';
import useApi from '../Hooks/useApi';
import { API_URLS } from '../Services/api.urls';
import { useNavigate } from "react-router-dom";


const Wrapper = styled(ListItem)`
    padding: 0 0 0 10px;
    background: inherit;
    cursor: pointer;
    & > div {
        display: flex;
        width: 100%
    }
    & > div > p {
        font-size: 14px;
    }
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #392C7E ;
    color: grey;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#392C7E'
})

const Email = ({ email, setStarredEmail, selectedEmails, setSelectedEmails,setRefreshScreen }) => {
    const toggleStarredEmailService = useApi(API_URLS.toggleStarredMails);

    const navigate = useNavigate();

    const toggleStarredEmail = () => {
        toggleStarredEmailService.call({ id: email._id, value: !email.starred });
        setStarredEmail(prevState => !prevState);
    }

    const handleChange = () => {
        if (selectedEmails.includes(email._id)) {
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
        } else {
            setSelectedEmails(prevState => [...prevState, email._id]);
        }
    }

    return (
        <Wrapper>
            <Checkbox
                size="small"
            checked={selectedEmails.includes(email._id)}
            onChange={() => handleChange()}
            />
            {
                email.starred ?
                    <Star fontSize="small" style={{ color:'#392C7E',marginRight: 10 }} onClick={() => toggleStarredEmail()} />
                    :
                    <StarBorder fontSize="small" style={{ color:'#392C7E',marginRight: 10 }} onClick={() => toggleStarredEmail()} />
            }
           
            <Box onClick={() => navigate(`/main/view/${email._id}`, { state: { email: email }})}>
                <Typography style={{ width: 200 }}>To:{email.to.split('@')[0]}</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}&nbsp;
                    {(new window.Date(email.date)).toLocaleString('default', { month: 'long' })}
                </Date>
            </Box>

        </Wrapper>
    )
}

export default Email;