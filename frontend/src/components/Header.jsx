import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar
        bg='primary'
        variant='primary'
        expand='lg'
        collapseOnSelect
        style={{ marginTop: '-50px' }}
      >
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
          {userInfo ? (
            <NavDropdown title={userInfo.firstName} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/orderHistory'>
                <NavDropdown.Item>Order History</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar>
    </header>
  )
}

export default Header
