import React from 'react'
import { ImageURL } from '../../context/Data'
import {Grid} from '@mui/material'
import styled from '@emotion/styled'

const MidSection = () => {

  const Wrapper = styled(Grid)`
  margin-top:10px;
  justify-content:space-between;
  ` 

  return (
    <>
      <Wrapper display={{display:'flex'}} lg={12} md={12} xs={12} container>
        {
            ImageURL.map(image =>(
                <Grid lg={4} md={4} xs={4}>
                <img src={image} alt=""/>
                </Grid>
            ))
        }
      </Wrapper>
    </>
  )
}

export default MidSection
