import styled from 'styled-components'

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import SearchIcon from '@material-ui/icons/Search'
import Badge from '@material-ui/core/Badge'
import { DeviceSizes, responsive } from '../responsive'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Language>EN</Language>
          <SearchWrapper>
            <Input placeholder="Search" />
            <StyledSearchIcon />
          </SearchWrapper>
        </LeftSide>
        <Center>
          <Logo>E-Commerce Shop.</Logo>
        </Center>
        <RightSide>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIconStyled />
            </Badge>
          </MenuItem>
        </RightSide>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  ${responsive({ height: '50px' })}
`

const Wrapper = styled.div`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftSide = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  ${responsive({ display: 'none' }, DeviceSizes.Tablet)}
`

const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  ${responsive({ justifyContent: 'flex-start' }, DeviceSizes.Tablet)}
`

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Logo = styled.h2`
  font-weight: bold;
  ${responsive({ fontSize: '15px' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${responsive({ fontSize: '12px', marginLeft: '10px' })}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchWrapper = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`
const Input = styled.input`
  border: none;
`

const StyledSearchIcon = styled(SearchIcon)`
  color: gray;
  font-size: 16px;
`

const ShoppingCartOutlinedIconStyled = styled(ShoppingCartOutlinedIcon)`
  ${responsive({ fontSize: '18px !important' })}
`
