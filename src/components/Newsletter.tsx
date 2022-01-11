import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send'

import { responsive } from '../responsive'

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Do you want a 10% discount?</Description>
      <Description>Subscribe to the newsletter.</Description>
      <Description>Register and stay up to date with news and deals.</Description>
      <InputWrapper>
        <Input maxLength={30} type="email" placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputWrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #fcf0f7;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${responsive({ height: '40vh' })}
`

const Title = styled.h2`
  font-size: 55px;
  letter-spacing: 3px;
  ${responsive({ fontSize: '40px' })}
`
const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 5px;
  ${responsive({ letterSpacing: '0.5px', fontSize: '14px' })}
`

const InputWrapper = styled.div`
  border: 1px solid black;
  width: 50%;
  margin-top: 20px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid lightgray;
  background-color: white;
  ${responsive({ width: '90%' })}
`

const Input = styled.input`
  flex: 8;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  border: none;
  font-size: 20px;
  outline: none;
`

const Button = styled.button`
  flex: 1;
  border: none;
  height: 100%;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`
