import React from 'react'
import {Box, Typography} from '@mui/material'
import styled from '@emotion/styled'

function Navbar() {

    const items = [
        {
          img: 'Grocery.webp',
          tittle: 'Grosery',
        },
        {
          img: 'Mobiles.webp',
          tittle: 'Mobiles',
        },
        {
          img: 'Fashion.webp',
          tittle: 'Fashion',
        },
        {
          img: 'Electronics.webp',
          tittle: 'Electronics',
        },
        {
          img: 'Home.webp',
          tittle: 'Home & Furniter',
        },
        {
          img: 'Appliances.webp',
          tittle: 'Appliances',
        },
        {
          img: 'Travel.webp',
          tittle: 'Travel',
        },
        {
          img: 'Top Offers.webp',
          tittle: 'Top Offers',
        },
        {
          img: 'Toys.webp',
          tittle: 'Beauty, Toys & More',
        },
        {
          img: 'Twowheelers.webp',
          tittle: 'Two Wheeelers',
        },
      ]


      const Component = styled(Box)(({theme})=>({
        display:'flex',
        margin:'65px 130px 0 130px',
        justifyContent:'space-between',
          [theme.breakpoints.down('md')]:{
            overflowX:'scroll',
            margin:0
          }
        }))

    const Container = styled(Box)(({theme})=>({
      padding: '12px 8px',
      [theme.breakpoints.down('md')]:{
        margin:10,
      }
    }))

    const Text = styled(Typography)`
    font-size:14px;
    font-weight:500;
    font-family:inherit;
    text-aline:center;
    `

  return (
    <Box style={{background:'#fff',}}>
    <Component>
    {
        items.map(item =>(
            <Container>
                <img src={item.img} alt="" style={{width:64}}/>
                <Text>{item.tittle}</Text>
            </Container>
        ))
      }
    </Component>
    </Box>
  )
}

export default Navbar
