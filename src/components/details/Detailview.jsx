import React from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {getProductsDetails} from '../../redux/actions/productAction'
import { useParams } from 'react-router-dom'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import {Grid} from '@mui/material'
import ActionItem from './ActionItem'
import styled from '@emotion/styled'
import ProductDetail from './ProductDetail';

const Detailview = () => {


  const Component = styled(Grid)(({theme})=>({
    background:'#f2f2f2',
    marginTop:'55px',
    [theme.breakpoints.down('lg')]:{
      padding:'20px 40px'
    }
  }))

  const Container = styled(Grid)(({theme})=>({
    background:'#ffffff',
    display:'flex',
    [theme.breakpoints.down('md')]:{
      margin:0
    }
  }))

  const RightContainer = styled(Grid)`
  margin-top:50px;
  padding-left:25px;
  & > p{
    margin-top:10px;
  }
  `

  const {product} =  useSelector(state => state.getProductsDetails);
  const {id} = useParams();
  console.log(id);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(product && id !== product.id)
    dispatch(getProductsDetails(id));
  },[dispatch,id,product])

  return (
    <Component>
      {
      product && Object.keys(product).length &&
      <Container container>
          <Grid item lg={4} md={4} xs={12} sm={8}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} xs={12} sm={8}>
            <ProductDetail product={product}/> 
          </RightContainer>
      </Container>
      }
    </Component>
  )
}

export default Detailview
