import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='primary' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Hi-Tech</Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            {/* <i> This tag is used to get font-awesome icons which I have imported as CDN in index.html
                        We can use this to give icons for links in the navbar like cart, login etc
                     */}
            {/* Replace all href with LinkContainer as done for the Navbar.Brand, the linkcontainer will allow
                         react-bootstrap elements to be linked to the router path.
                     */}
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href='#login'>Signup/Login</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
