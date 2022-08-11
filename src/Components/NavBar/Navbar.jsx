import React from 'react';
import Box from '@mui/material/Box';
import './Navbar.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Add from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ()=>{
    const [login,setlogin] = React.useState(false);
    const [pdrop,setpdrop] = React.useState(false);

    return (
    <Box className="navbar-main">
        <div className="navbar-left">
            <div className='search-container'>
                    <div className='search'>
                        <SearchRoundedIcon className="search-icon" sx={{ color: 'orange', mr: 1, my: 0.5, padding:'0px 10px', fontSize: 30 }} />
                        <input placeholder='Enter keywords' className="search-box" />
                    </div>
            </div>
        </div>
        <div className="navbar-right">
            <div className="right">   
                <div className="sell-button">
                    <Add className="sell-icon" sx={{color: 'orange', fontSize: 30}}/>
                </div>
                <div className="profile">
                    {login ?(
                        <AccountBoxIcon className="profile-button items" onClick={()=>{setlogin(true); setpdrop(!pdrop)}} sx={{color: 'orange', fontSize: 36}}/>
                        
                        ): (
                        <a href="#" onClick={()=>{setlogin(!login);}} className="profile-login">Login</a>
                    )}  
                    {pdrop && <Profiledrop />}              
                </div>                
                <div className='notif'>
                    <NotificationsIcon className="notif-button items" sx={{color: 'orange', fontSize: 36}} />
                </div>
                <div className='chat'>    
                    <SmsIcon className="chat-button items" sx={{color: 'orange', fontSize: 36}} />
                </div>
            </div>
        </div>
    </Box>
    );
}

const Profiledrop = ()=>{
    function Pditems(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-left">{props.leftIcon}</span>
                {props.children}
            </a>
        );
    }

    return (
        <div className="dropdown">
            <Pditems leftIcon={<AccountCircleIcon />} >Profile</Pditems>
            <Pditems leftIcon={ <SettingsIcon />} >Settings</Pditems>
        </div>
        );
}
export default Navbar;