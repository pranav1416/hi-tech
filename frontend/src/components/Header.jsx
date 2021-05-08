import React from 'react'
import { Route } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from 'react-bootstrap'
import SearchBox from './SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

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
        fixed='top'
      >
        <LinkContainer to='/'>
          <Navbar.Brand>Hi-Tech</Navbar.Brand>
        </LinkContainer>
        <Nav className='container-fluid'>
          {/* <i> This tag is used to get font-awesome icons which I have imported as CDN in index.html
                        We can use this to give icons for links in the navbar like cart, login etc
                     */}
          {/* Replace all href with LinkContainer as done for the Navbar.Brand, the linkcontainer will allow
                         react-bootstrap elements to be linked to the router path.
                     */}
          <div className='ml-auto'>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </div>
          <LinkContainer to='/cart'>
            <Nav.Link className='ml-auto'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
          </LinkContainer>
          {userInfo ? (
            <NavDropdown title={userInfo.firstName} id='username' alignRight>
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
      </Navbar>
    </header>
  )
}

export default Header
