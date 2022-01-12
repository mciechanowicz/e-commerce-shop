import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

import { responsive } from '../responsive'

const links = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Cart',
    url: '/cart',
  },
  {
    name: 'Accessories',
    url: '/accessories',
  },
  {
    name: 'Categories',
    url: '/Categories',
  },
  {
    name: 'Sing In',
    url: '/signin',
  },
  {
    name: 'Register',
    url: '/register',
  },
  {
    name: 'Terms',
    url: '/terms',
  },
]

export const Footer = () => {
  return (
    <Container>
      <InfoWrapper>
        <Logo>E-Commerce Shop.</Logo>
        <Info>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English.
        </Info>
      </InfoWrapper>
      <LinksWrapper>
        <Title>Links</Title>
        <List>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </List>
      </LinksWrapper>
      <ContactWrapper>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          <Info>Imaginary street 123/321, Wrocław Poland</Info>
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          <Info>+48 123 456 789</Info>
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          <Info>michal@ecommerceshop.com</Info>
        </ContactItem>
        <Copyright>© 2022 E-commerce Shop., Inc.</Copyright>
      </ContactWrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 30vh;
  display: flex;
  padding: 30px;
  ${responsive({ flexDirection: 'column', justifyContent: 'space-between' })}
`

const InfoWrapper = styled.div`
  flex: 1;
  padding: 0px 40px;
  ${responsive({ padding: 0, marginBottom: '10px' })}
`
const Logo = styled.h3`
  font-size: 30px;
  margin-bottom: 30px;
  ${responsive({ marginBottom: '10px' })}
`
const Info = styled.p``

const LinksWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${responsive({ marginBottom: '10px' })}
`

const ContactWrapper = styled.div`
  flex: 1;
  ${responsive({ paddingBottom: '30px' })}
`

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  ${responsive({ marginBottom: '10px' })}
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  }
  li {
    width: 50%;
    margin-bottom: 10px;
    ${responsive({ marginBottom: '5px' })}
  }
`

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  p {
    margin-left: 10px;
  }
`
const Copyright = styled.p``
