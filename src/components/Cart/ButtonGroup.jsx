import React from 'react'
import {Button,ButtonGroup} from '@mui/material'
import styled from '@emotion/styled'

const Component = styled(ButtonGroup)`
margin-top:30px;
`
const Stylebutton = styled(Button)`
border-radius:50%;
`
const GroupButton = () => {
  return (
    <Component>
      <Stylebutton>-</Stylebutton>
      <Button disabled>1</Button>
      <Stylebutton>+</Stylebutton>
    </Component>
  )
}

export default GroupButton
