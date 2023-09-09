import React from 'react'
import{useSelector} from 'react-redux'
import {Grid, Box, Typography, Button} from '@mui/material'
import styled from '@emotion/styled'
import CartItem from './CartItem'
import TotalBalance from './TotalBalance'
import EmptyCart from './EmptyCart'


const Cart = () => {

const {cartItems} = useSelector(state=>state.cart);
console.log(cartItems.length);

const Container = styled(Grid)`
padding:30px 105px;
`
const Header = styled(Box)`
padding:15px 24px;
background:#fff;
`
const PlaceOrder = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0/10%);
border:1px solid #f0f0f0;
`
const StyledButton = styled(Button)`
background:#fb641b;
display:flex;
margin-left:auto;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`
  return (
    <>
    {
        cartItems.length !== 0 ?
        <Container container>
            <Grid item lg={9} md={9}>
            <Header>
                <Typography>My Cart({cartItems.length})</Typography>
            </Header>
                {
                cartItems.map(item=>(
                    <CartItem item={item}/>
                ))
                }
            <PlaceOrder>
                <StyledButton>place order</StyledButton>
            </PlaceOrder>
            </Grid>
            <Grid item lg={3} md={9}>
                <TotalBalance cartItems={cartItems}/>
            </Grid>
        </Container>
        :
        <EmptyCart/>
    }
    </>
  )
}

export default Cart
