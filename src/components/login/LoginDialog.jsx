import React from 'react'
import axios from 'axios'
import {Dialog, TextField, Typography} from '@mui/material'
import {Box, Button} from '@mui/material'
import styled from '@emotion/styled'
import { useState} from 'react'
import { DataContext } from '../../context/DataProvider'
import { useContext } from 'react'
const URL = process.env.REACT_APP_API;


const Component = styled(Box)`
height:60vh;
wight:90vh;
`
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 95% no-repeat;
height:100%;
width:40%;
padding: 45px 35px;
& > p, >h5{
  color:#fff;
  font-weight:600;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, > button, > p{
  margin-top:20px;
}
`
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
boarder-radius:2px;
`

const RequestOtp = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
boarder-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`

const Text = styled(Typography)`
fonst-size:12px;
color:#878787;
`
const CreateAccount = styled(Typography)`
font-size:14px;
text-aline:center;
color:#2874f0;
font-weight:500;
cursor:pointer;
`

const accountinitialValue = {
  login:{
    viwe:'login',
    heading:'Login',
    subHeading:'Get access to your orders wishlist ans Recommendation'
  },

  signup:{
    view:'signup',
    heading:"Look loke you're now here",
    subHeading:'Sign up with your mobile number to get started'
  }
}

function LoginDialog({open, setOpen}){

  const handleClose = ()=>{
    console.log("handle close called");
    setOpen(false);
    ToggleAccount(accountinitialValue.login);
  }

//states
const [account, ToggleAccount] = useState(accountinitialValue.login);

  const toggleSignup=()=>{
  ToggleAccount(accountinitialValue.signup);
}

const signupInitialValue = {
  firstname:"",
  lastname:"",
  username:"",
  email:"",
  password:"",
  phone:""
}

//states 
const[signup,setSignup] = useState(signupInitialValue);

const InputChange = (e)=>{
  setSignup({...signup,[e.target.name]:e.target.value});
}

//states
const {setAccount} = useContext(DataContext);


const loginInitialValues ={
  username : '',
  password : ''
}

const [login, setLogin] = useState(loginInitialValues)

const onValueChange = (e)=>{
  setLogin({...login, [e.target.name]:e.target.value});
}


const NewRegister = async ()=>{
  try{
    const response = await axios.post(`${URL}/signup`,signup);
    if(response.status === 200){
      setAccount(signup.username);
      handleClose();
    }
    else{
      console.log(response)
    }
  }
  catch(err){
    console.log(err);
  }
}

const[error,setError] =  useState(false);
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top: 10px;
font-weight:600;
`

const LoginUser = async ()=>{
try{
    
    const response = await axios.post(`${URL}/login`,login);
    console.log(response);
    if(response.status === 200){
      setAccount(login.username);
      handleClose();
    }
}
catch(err){
setError(true)
}}

return (
    <Dialog open={open} onClose={handleClose}>
    <Component>
    <Box style={{display:'flex', height:'100%'}}>
       <Image>
        <Typography variant='h5'>{account.heading}</Typography>
        <Typography style={{marginTop:'20px'}}>{account.subHeading}</Typography>
       </Image>
       { 
        account.viwe  === 'login' ?
        <Wrapper>
        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="username" label="Enter username"/>
        { error && <Error>Please enter valid username and password</Error>}
        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name="password" label="Enter password" />
        <Text> By continuing, you agree to flipkart's Term of use and Privacy Policy</Text>
        <LoginButton onClick={LoginUser} onKeyDown={(e)=>{e.key === 'Enter' && LoginUser()}} >Login</LoginButton>
        <Typography style={{textAlign:'center'}}>OR</Typography>
        <RequestOtp>Request OTP</RequestOtp>
        <CreateAccount onClick={()=> toggleSignup()} >New to flipkart? Create an account</CreateAccount>
       </Wrapper>
      :
       <Wrapper>
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="firstname" label="Enter Firstname"/>
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="lastname" label="Enter Lastname" />
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="username" label="Enter Username" />
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="email" label="Enter Email" />
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="password" label="Enter password" />
        <TextField variant='standard' onChange={(e)=>InputChange(e)} name="phone" label="Enter phone" />
        { error && <Error>Please enter valid details</Error>}
        <LoginButton onClick={()=> NewRegister()} onKeyDown={(event)=>{if(event.key === "Enter")NewRegister()}}>Continue</LoginButton>
       </Wrapper>
       }
    </Box>
    </Component>
    </Dialog>
  )
}

export default LoginDialog
