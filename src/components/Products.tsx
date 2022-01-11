import styled from 'styled-components'

import { Product as ProductType } from '@chec/commerce.js/types/product'

import { Product } from './Product'

interface ProductsProps {
  products: ProductType[]
}

export const Products = ({ products }: ProductsProps) => {
  return (
    products && (
      <Container>
        {products.slice(0, 6).map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </Container>
    )
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`
