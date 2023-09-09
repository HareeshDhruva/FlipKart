import { Typography, Box, Button} from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import { addEllipsis } from '../utils/common-utils'
import GroupButton from './ButtonGroup'
import {removeToCart}from '../../redux/actions/productAction'
import { useDispatch} from 'react-redux'

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const Components =  styled(Box)`
border-top: 1px solid #f0f0f0;
display:flex;
background:#fff;
`
const LeftComponents = styled(Box)`
margin:20px;
`
const SmallText = styled(Typography)`
color:#878787;
display:flex;
margin-top:10px;
`

const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;

`
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const removeItem = (id)=>{
    dispatch(removeToCart(id));
  }
  return (
    <Components>
      <LeftComponents>
        <img src={item.url} alt="" style={{height:110,width:110}}/>
        <GroupButton/>
      </LeftComponents>
      <Box style={{margin:20}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller:RetailNet
          <Box component="span">
            <img src={fassured} alt="" style={{width:77, marginLeft:10}}/>
          </Box>
        </SmallText>
        <Typography style={{margin:'20px 0'}}>
                <Box component="span" style={{fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#878787'}}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
        </Typography>
        <Remove onClick={()=>removeItem(item.id)}>
          Remove
        </Remove>
      </Box>
    </Components>
  )
}

export default CartItem
