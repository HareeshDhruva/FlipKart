
import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import LoginDialog from './login/LoginDialog';
import { useState } from 'react';
import {useContext } from 'react'
import { DataContext } from '../context/DataProvider';
import Profile from './profile'
import {Link} from 'react-router-dom'

function CustomButtons() {

    const Wrapper = styled(Box)(({theme})=>({
      display:'flex',
      margin:'0 3% 0 auto',
      '& > Button, & > p , & > div':{
          marginRight:40,
          fontSize:16,
          alineItem:'center'
      },
        [theme.breakpoints.down('md')]:{
          display:'block' 
        }
      }))

    const Container = styled(Link)(({theme})=>({
      display:'flex',
      [theme.breakpoints.down('md')]:{
        display:'block'
      }
    }))

    const Innercel = styled(Box)(({theme})=>({
      display:'flex',
      columnGap:15,
      [theme.breakpoints.down('md')]:{
        display:'inline'
      }
    }))

    const LoginButton = styled(Button)(({theme})=>({
    color:'#2874f0',
    background:'#fff',
    marginLeft:10,
    textTransfer:'none',
    padding : '5px 40px',
    borderRadius:2,
    boxShadow:'none',
    fontWeight:500,
    height:32,
      [theme.breakpoints.down('md')]:{
        background:'#2874f0',
        color:'#ffffff'
      }
    }))

    const [open,setOpen]=useState(false);
    
    const openDialog = ()=>{
      setOpen(true);
    }

    const {account, setAccount} = useContext(DataContext);

  return (
    <Wrapper>
    {
      account ? <Profile account={account} setAccount={setAccount}/> :
        <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
    }
        <Container style={{marginTop:3}} to="/Cart">
        <Innercel sx={{display:'flex'}}>
          <Typography style={{marginTop:3}}>More</Typography>
          <Typography style={{marginTop:3, width:135}}>Become a Sellor</Typography>
        </Innercel>
          <Typography style={{marginTop:3,display:'flex'} }><ShoppingCartIcon/> Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons
