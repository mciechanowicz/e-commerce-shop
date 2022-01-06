import { useState } from 'react'

import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import { sliderData } from '../data'

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0)

  const handleSlider = (direction: string): void => {
    if (direction === 'left') {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 0)
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 2)
    }
  }

  return (
    <Container>
      {sliderIndex !== 0 && (
        <Arrow onClick={() => handleSlider('left')} position="left">
          <ArrowBackIosIcon />
        </Arrow>
      )}
      <Wrapper>
        {sliderData.map((sliderItem) => (
          <Slide sliderIndex={sliderIndex} bgColor={sliderItem.bg} key={sliderItem.id}>
            <ImgWrapper>
              <Image src={sliderItem.img} alt="shop" />
            </ImgWrapper>
            <InfoWrapper>
              <Title>{sliderItem.title}</Title>
              <Description>{sliderItem.description}</Description>
              <Button>SHOP NOW</Button>
            </InfoWrapper>
          </Slide>
        ))}
      </Wrapper>
      {sliderIndex !== 2 && (
        <Arrow onClick={() => handleSlider('right')} position="right">
          <ArrowForwardIosIcon />
        </Arrow>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
`

interface ArrowProps {
  position: string
}
const Arrow = styled.div<ArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f1f1f1;
  opacity: 0.7;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 3;
  left: ${({ position }) => position === 'left' && 15}px;
  right: ${({ position }) => position === 'right' && 15}px;
  &:hover {
    opacity: 0.8;
    background-color: #ebebeb;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

interface SlideProps {
  bgColor: string
  sliderIndex: number
}

const Slide = styled.div<SlideProps>`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  transition: 1s;
  transform: translateX(${({ sliderIndex }) => sliderIndex * -100}vw);
`

const ImgWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  height: 80%;
`

const InfoWrapper = styled.div`
  flex: 1;
  padding: 40px;
`

const Title = styled.h2`
  font-size: 72px;
  font-weight: bold;
`

const Description = styled.p`
  letter-spacing: 3px;
  font-size: 30px;
  margin: 50px 0px;
`

const Button = styled.button`
  border: 1.8px solid black;
  padding: 10px 20px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`
