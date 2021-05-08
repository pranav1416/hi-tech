import React, { useEffect } from 'react'
import { Col, Row, Tabs, Tab, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import Message from './Message'
import Product from './Product'
import SpecialProduct from './SpecialProduct'

const HomeMenu = ({ specialProduct, saleProducts, topProducts }) => {
  const homeData = useSelector((state) => state.homeData)
  const { loadingData, error } = homeData

  useEffect(() => {}, [specialProduct, saleProducts, topProducts])

  return (
    <Row style={{ paddingTop: '0.5rem', paddingLeft: '0.5rem' }}>
      {loadingData ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Col sm={3} md={3} lg={3} style={{ paddingLeft: '0rem' }}>
            <Row>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle
                    variant='success'
                    id='dropdown-basic'
                    style={{ width: '100%', height: '2.5rem' }}
                  >
                    Browse Categories
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: '100%' }}>
                    <Dropdown.Item as={Link} to='/search/page/1/all'>
                      All Categories
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/Audio'>
                      Audio
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/Computers'>
                      Computers
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/TV'>
                      TV
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/Mobile'>
                      Mobile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/Cameras'>
                      Cameras/Camcorders
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to='/search/page/1/Car'>
                      Car Electronics
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col>
                {specialProduct.name ? (
                  <SpecialProduct specialProduct={specialProduct} />
                ) : (
                  'ERROR'
                )}
              </Col>
            </Row>
          </Col>
          <Col sm={9} md={9} lg={9}>
            <Row>
              <Col style={{ marginLeft: '-1.5rem' }}>
                <Tabs
                  defaultActiveKey='onSale'
                  id='home-menu-tabs'
                  fill
                  justify
                >
                  <Tab eventKey='onSale' title='On Sale'>
                    <Row style={{ paddingLeft: '1.5rem' }}>
                      {saleProducts.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                          <Product
                            style={{ paddingTop: '10px' }}
                            product={product}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab>

                  <Tab eventKey='topRated' title='Top Rated'>
                    <Row>
                      {topProducts.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                          <Product
                            style={{ paddingTop: '10px' }}
                            product={product}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Col>
        </>
      )}
    </Row>
  )
}

export default HomeMenu
