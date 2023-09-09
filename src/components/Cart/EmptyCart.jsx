import React from 'react'
import {Box, Button, Divider, Typography} from '@mui/material'
import styled from '@emotion/styled';

const Component = styled(Box)`
height:55vh;
width:80%;
background:#fff;
margin:80px 140px;
`

const Container = styled(Box)`
text-align:center;
padding-top: 70px;
`

const ImageArea = styled(Box)`
align-item:center;
display:flex;
justify-content:center;
`

const LoginButton = styled(Button)(({theme})=>({
    color:'#fff',
    background:'#fb541B',
    marginLeft:10,
    marginTop:20,
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

    const FlipkartText = styled(Typography)`
    padding:10px 30px;
    text-align:center;
    font-size:20px;
    color:#2074f0;
    barder:1px solid #2074f0;
    `

    const FlipkartDiv = styled(Box)`
    height:60px;
    `

const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
const EmptyCart = () => {
  return (
    <Component>
        <FlipkartDiv>
            <FlipkartText>Flipkart</FlipkartText>
        </FlipkartDiv>
        <Divider />
        <Divider/>
        <Container>
        <ImageArea>
            <img src={imgurl} alt="" style={{width:'15%'}} />
        </ImageArea>
        <Box style={{marginTop:40}}>
            <Typography>Tour cart is empty</Typography>
            <Typography >Add items to it now</Typography>
        </Box>
            <LoginButton>Login</LoginButton>
        </Container>
    </Component>
  )
}

export default EmptyCart
