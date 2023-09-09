import React, { useState } from 'react'
import {AppBar, Toolbar, styled, Box, Typography, Drawer, List, ListItem,IconButton} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons'
import {Menu} from '@mui/icons-material';

function Header() {

  const [open, setOpen]=useState(false);

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const Plus_logo = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/plus-brand-bc165b.svg"
  
  const StyledHeader = styled(AppBar)`
  background:#2874f0;
  height:55px;
  `

  const Component = styled(Box)(({theme})=>({
    marginLeft: '12%',
      fontSize:'12px',
      lineHeight:0,
    [theme.breakpoints.down('md')]:{
      marginLeft:'6%'
    }
  }));

  const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic;
  `
  const Pluslogo = styled('img')({
    width:10,
  })

  const CustomButtonApper = styled(Box)(({theme})=>({
    margin:'0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
      display:'none'
    }
  }));

  const MenuButton = styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
      display:'block'
    }
  }));

  const handleopen = ()=>{
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
  }


  return (
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>

            <MenuButton color='inherit' onClick={handleopen}>
              <Menu/>
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
            <Box sx={{width:200}} onClick={handleClose}>
            <List>
              <ListItem Button>
                  <CustomButtons/>
              </ListItem>
            </List>
            </Box>
            </Drawer>
            
            <Component to='/'>
              <img src={logoURL} alt="" style={{width:75}}/>
              <Box style={{display:'flex'}}>
                <SubHeading>Explore &nbsp;
                  <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                </SubHeading>
                &nbsp;
                <Pluslogo src={Plus_logo} alt="" />
              </Box>
            </Component>
            
            <Search/>
            <CustomButtonApper>
              <CustomButtons/>
            </CustomButtonApper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header
