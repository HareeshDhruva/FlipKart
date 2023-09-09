import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Banner() {

    const data = [
        {
          img:"temp1.webp",
        },
        {
          img:"temp2.webp",
        },
        {
          img:"temp3.webp",
        },
        {
          img:"temp4.webp",
        },
        {
          img:"temp5.webp",
        },
      
      ]

    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <Carousel responsive={responsive} infinite={true} autoPlay={true}  autoPlaySpeed={2000}>
      {
        data.map(item =>(
            <img src={item.img} alt='' className='max-sm:h-[120px]'/>
        ))
      }
    </Carousel>
  )
}

export default Banner
