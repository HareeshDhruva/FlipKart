import { Typography,Box,Menu, MenuItem, styled} from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = ({account,setAccount}) => {

  const [open, setOpen] = useState(false);

  const handleClick=(event)=>{
    setOpen(event.currentTarget);
  }

  const handleClose=()=>{
    setOpen(false);
  }

  const Components = styled(Menu)`
  margin-top:7px;
  `
  const Logout = styled(Typography)`
  font-size:14px;
  margin-left:20px;
  `

  const logoutUser = ()=>{
    setAccount('');
  }


  return (
    <>
    <Box onClick={handleClick}>
     <Typography style={{marginTop:3, display:'flex',}}><AccountCircleIcon style={{marginRight:5}}/>{account}</Typography> 
    </Box>
    <Components
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> {handleClose();logoutUser();}}>
        <PowerSettingsNewIcon fontSize='small' color='primary'/>
        <Logout>Logout</Logout>
        </MenuItem>
    </Components>
    </>
  )
}

export default Profile
