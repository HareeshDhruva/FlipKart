import React, {useState} from 'react'
import {Box, Button} from '@mui/material'
import styled from '@emotion/styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart} from '../../redux/actions/productAction';


const LeftContainer = styled(Box)`
min-width:40%;
padding:40px 0 0 80px;
`
const Image = styled('img')({
    width:'90%',
    padding:'15px'
})
const StyleButton = styled(Button)(({theme})=>({
    height:50,
    width:'48%',
    borderRadius:2,
    [theme.breakpoints.down('lg')]:{
      width:'46%'
    }
  }))

  
const ActionItem = ({product}) => {
  console.log(product)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity,setQuantity]=useState(1);
    const {id} = product;

    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity))
        setQuantity(quantity+1)
        navigate('/Cart')
      }

  return (
    <LeftContainer>
    <box style={{padding:'15px 20px',border:'1px solid #f0f0f0', width:'46%'}}>
      <Image src={product.detailUrl} alt=""/>
    </box>
    <Box>
      <StyleButton variant='contained' onClick={()=>addItemToCart()} style={{marginRight:10, background:'#ff9f00'}}><ShoppingCartIcon/>Add To Cart</StyleButton>
      <StyleButton variant='contained' style={{background:'#fb541B'}}><FlashOnIcon/>Buy Now</StyleButton>
    </Box>
    </LeftContainer>
  )
}

export default ActionItem
