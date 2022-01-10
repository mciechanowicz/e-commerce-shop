import styled from 'styled-components'
import { responsive } from '../responsive'

interface CategoryItemProps {
  item: {
    id: number
    img: string
    title: string
  }
}

export const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <Container>
      <Image alt="category" src={item.img} />
      <InfoWrapper>
        <Title>{item.title}</Title>
        <Button>BUY NOW</Button>
      </InfoWrapper>
    </Container>
  )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
  min-width: 400px;
  transition: 1s;
  &:hover ${Image} {
    transform: scale(1.01);
  }
  ${responsive({ minWidth: '60%', height: '35vh' })}
`

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 1s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }
`

const Title = styled.h3`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  ${responsive({ fontSize: '23px' })}
`

const Button = styled.button`
  color: black;
  padding: 15px;
  background-color: #fff;
  border: none;
  font-weight: 500;
  cursor: pointer;
  ${responsive({ padding: '10px' })}
`
