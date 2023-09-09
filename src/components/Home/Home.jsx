import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import {Box} from '@mui/material'
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetchBackendData} from '../../redux/actions/productAction'
import { useSelector} from 'react-redux'
import Slider from './Slider';
import Ads from './Ads';
import MidSection from './MidSection';
import Footer from './Footer';

function Home(props) {
  const Component = styled(Box)`
  padding:10px 10px;
  background:#F2F2F2;
  height:100vh;
  `

  const Image = styled('img')(({ theme }) => ({
      marginTop:10,
      width:'100%',
      display:'flex',
      justifyContent:'space-between',
      [theme.breakpoints.down('md')]:{
            objectFit:'cover',
            height:120,
          }
  }));

  const {products} = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBackendData())
  },[dispatch])

  const url = 'https://rukminim1.flixcart.com/fk-p-flap/1600/230/image/f3eb10134df17580.jpg?q=20';
  
  return (
    <>
    <Navbar/>
    <Component>
        <Banner/>
        <Ads products={products} title ='Deal fo the Day' timer = {true}/>
        <MidSection/>
        <Slider products={products} title='Discount for you' timer={false}/>
        <Image src={url} alt="" />
        <Slider products={products} title='Top Deals on Accessories' timer={false}/>
        <MidSection/>
        <Slider products={products} title='Recommended for you' timer={false}/>
        <Footer/>
    </Component>
    </>
  )
}

export default Home
