import { Typography, Box} from '@mui/material'
import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'

const Header = styled(Box)`
padding:15px 24px;
background-color:#fff;
border-bottom:1px solid #f0f0f0;
`

const Heading = styled(Typography)`
color:#878787;
`

const Container = styled(Box)`
padding:15px 34px;
background:#fff;
& > p{
    margin-bottom:20px;
    font-size:14px;
}

`

const Price = styled(Box)`
float:right;
`

const TotalBalance = ({cartItems}) => {

    const[price, setPrice] = useState(0);
    const[discount,SetDiscount] = useState(0);

    const TotalAmount = ()=>{

        let price = 0,discount=0;
        cartItems.map(item=>{
            price += item.price.mrp;
            discount += (item.price.mrp-item.price.cost)
        })
        setPrice(price);
        SetDiscount(discount);
    };

    useEffect(()=>{
        TotalAmount();
    },[TotalAmount])

    const Component = styled(Box)(({theme})=>({
        [theme.breakpoints.up('lg')]:{
            marginLeft:20,
        },
        [theme.breakpoints.down('sm')]:{
            marginTop:20,
            width:335,
        }
    }));
       
  return (
    <Component>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price({cartItems?.length} item) <Price component="span">₹ {price}</Price></Typography>
            <Typography>Discount({cartItems?.length} item) <Price component="span">₹ {discount}</Price></Typography>
            <Typography>Delivery Charges({cartItems?.length} item) <Price component="span">₹ 40</Price></Typography>
            <Typography variant='h7'>Total Amount({cartItems?.length} item) <Price component="span">₹ {price-discount+40}</Price></Typography>
            <Typography style={{color:'green', fontWeight:600}}>You will save ₹{discount-40} on this order</Typography>
        </Container>
    </Component>
  )
}

export default TotalBalance
