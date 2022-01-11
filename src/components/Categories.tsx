import styled from 'styled-components'

import { responsive } from '../responsive'
import { categories } from '../data'

import { CategoryItem } from '.'

export const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem item={category} key={category.id} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  ${responsive({ padding: '15px 5px' })}
`
