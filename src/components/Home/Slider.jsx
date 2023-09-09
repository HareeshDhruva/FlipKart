import React from 'react'
import Carousel from 'react-multi-carousel'
import {Box, Typography, Divider, styled, Button} from '@mui/material'
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'


const Slider = ({products ,title,timer}) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const Components = styled(Box)`
      margin-top:10px;
      background-color:#FFFFFF;
      `
      const Deal = styled(Box)`
      padding:15px 20px;
      display:flex;
      `

      const Timer = styled(Box)`
      display:flex;
      margin-top:5px;
      margin-left:10px;
      aline-items:center;
      color:#7f7f7f;
      `

      const Dealtext = styled(Typography)`
      font-size:22px;
      font-weight:600;
      margin-right:25px;
      line-height:32px;
      `

      const Viewbutton = styled(Button)`
      margin-left:auto;
      background-color:#2874f0;
      border-radius:2px;
      font-size:13px;
      font-weight:600;
      `

      const Image = styled('img')({
        weight:'auto',
        height:150,
    
      })

      const Text =  styled(Typography)`
      font-size:14px;
      margin-top:5px;
      `

      const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

      const renderer = ({ hours, minutes, seconds, completed }) =>{
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
      }
  return (
    <Components>
        <Deal>
           <Dealtext>
              {title}
           </Dealtext>
              {
                 timer && <Timer>
                <img src={timerURL} alt="" style={{width:24}}/>
                 <Countdown date={Date.now()+5.04e+7} renderer={renderer}/>
                </Timer>
              }
           <Viewbutton variant="contained" color="primary">view all</Viewbutton>
        </Deal>
        <Divider/>
        <Carousel 
        responsive={responsive}   
        swipeable={true}
        draggable={true}
        infinite={true}
        keyBoardControl={true}
        centerMode={true}
        autoPlay={1000}
        >
          {
            products.map(items =>(
              <Link to={`product/${items.id}`}>
                <Box style={{padding:'25px 15px'}}>
                <Image src={items.url} alt="" />
                <Text style={{fontWeight:600, color:'#212121'}}>{items.title.shortTitle}</Text>
                <Text style={{color:'green'}}>{items.discount}</Text>
                <Text style={{color:'#212121', opacity:'.6'}}>{items.tagline}</Text>
                </Box>
              </Link>
            ))
          }
        </Carousel>
    </Components>
  )
}

export default Slider
