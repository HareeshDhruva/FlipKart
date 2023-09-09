import React from 'react'
import Slider from './Slider'
import {Box} from '@mui/material'
import styled from '@emotion/styled'

const Ads = ({products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/bda5d61c48a56975.jpeg?q=20';

    const Components = styled(Box)`
    display:flex;
    `

    const LeftComponent = styled(Box)(({theme})=>({
      width:'83%',
      [theme.breakpoints.down('lg')]:{
        width:'100%',
        height:'auto'
      }
    }))

    const RightComponent = styled(Box)(({theme})=>({
      backgroundColor:'#fff',
      padding:5,
      marginTop:10,
      marginLeft:10,
        [theme.breakpoints.down('lg')]:{
          visibility:'hidden'
        }
      }))
    
    

  return (
    <Components>
      <LeftComponent>
      <Slider products={products} title='Discount for you' timer={timer}/>
      </LeftComponent>
      <RightComponent>
      <img src={adURL} alt="" />
      </RightComponent>
    </Components>
  )
}

export default Ads
