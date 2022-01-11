import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { Product as ProductType } from '@chec/commerce.js/types/product'
import { responsive } from '../responsive'

interface ProductProps {
  product: ProductType
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Container>
      <Image src={product?.image?.url} />
      <IconsWrapper>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </IconsWrapper>
    </Container>
  )
}

const IconsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.7s;
  ${responsive({ opacity: 1 })}
`

const Container = styled.div`
  display: flex;
  margin: 5px;
  height: 45vh;
  width: 30vw;
  position: relative;
  &:hover ${IconsWrapper} {
    background-color: rgba(75, 75, 75, 0.4);
    opacity: 1;
  }
  ${responsive({ width: '100%' })}
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
  opacity: 0.85;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  ${responsive({ width: '60px', height: '60px' })}
`
