import React from 'react'
import styled from 'styled-components'

export const Announcement = () => {
  return (
    <Container>
      <Text>Enjoy Free Shipping on orders over $24.99!</Text>
    </Container>
  )
}

const Container = styled.div`
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
`

const Text = styled.h5`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`
