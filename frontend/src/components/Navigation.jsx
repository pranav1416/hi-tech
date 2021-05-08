import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom'
import { Row, Col, Tab } from 'react-bootstrap'

const Navigation = () => {
  var location = useLocation()
  const pos = location.pathname.lastIndexOf('/')
  let urlPath
  if (isNaN(location.pathname[pos + 1])) {
    var temp = location.pathname.slice(0, pos).lastIndexOf('/')
    urlPath = location.pathname.slice(0, temp) + '/1'
  } else {
    urlPath = location.pathname.slice(0, pos) + '/1'
  }

  return (
    <Tab.Container id='left-tabs-example'>
      <Row style={{ width: '100%' }}>
        <Col sm={3}>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <LinkContainer to={urlPath + '/all'}>
                <Nav.Link eventKey='all'>All Categories</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/Audio'}>
                <Nav.Link eventKey='Audio'>Audio</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/Computers'}>
                <Nav.Link eventKey='Computers'>Computers</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/TV'}>
                <Nav.Link eventKey='TV'>TV</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/Mobile'}>
                <Nav.Link eventKey='Mobile'>Mobile</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/Cameras'}>
                <Nav.Link eventKey='Cameras/Camcorders'>
                  Cameras/Camcorders
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={urlPath + '/Car'}>
                <Nav.Link eventKey='Car Electronics'>Car Electronics</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default Navigation
