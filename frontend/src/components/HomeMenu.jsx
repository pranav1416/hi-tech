import React, { useEffect, useState } from 'react'
import { Col, Row, Tabs, Tab, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listAllTopProducts } from '../actions/homeActions'
import Product from './Product'
import SpecialProduct from './SpecialProduct'
const prods = [
  {
    _id: {
      $oid: '6072e172d3391f1491761668',
    },
    id: 'AVpi9AE_LJeJML43qkYJ',
    prices: {
      amountMax: 199.98,
      amountMin: 199.98,
      availability: 'TRUE',
      isSale: false,
    },
    brand: 'Panamax',
    categories: [
      'Audio Power Conditioners',
      'Consumer Electronics',
      'A/V Surge Protectors & Power',
      'Musical Instruments & Gear',
      'Pro Audio Equipment',
      'Extension Cords & Surge Protectors',
      'Multipurpose Batteries & Power',
      'TV & Home Theater',
      'Electrical',
      'Surge Protectors',
      'TV & Home Theater Accessories',
      'Surge Protectors',
      ' Power Strips',
    ],
    imageURLs: [
      'http://i.ebayimg.com/thumbs/images/g/VtMAAOxyZW5R6coV/s-l96.jpg',
      'http://i.ebayimg.com/images/g/rZ8AAOxyzxJR6cF~/s-l64.jpg',
      'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5587/5587713_sa.jpg',
      'https://i.ebayimg.com/images/g/zRMAAOSwheFawq3g/s-l64.jpg',
      'http://i.ebayimg.com/images/g/Sc0AAMXQxj1R6cFc/s-l64.jpg',
      'https://i.ebayimg.com/images/g/bcEAAOSwYKNawq2t/s-l64.jpg',
      'http://i.ebayimg.com/thumbs/images/g/VtMAAOxyZW5R6coV/s-l96.jpg',
      'https://i.ebayimg.com/thumbs/images/g/HJAAAOSwEBpapDiE/s-l200.jpg',
      'http://www.homedepot.com/catalog/productImages/300/3d/3d896f3d-e8f2-4eba-b832-5790198b757f_300.jpg',
      'http://i.ebayimg.com/images/g/rZ8AAOxyzxJR6cF~/s-l64.jpg',
      'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5587/5587713_sa.jpg',
      'https://i.ebayimg.com/images/g/xNkAAOSwxwRawq2z/s-l64.jpg',
      'http://i.ebayimg.com/images/g/CZMAAOxyjfZR6cFu/s-l64.jpg',
      'https://i.ebayimg.com/images/g/zRMAAOSwheFawq3g/s-l300.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5587/5587713_sa.jpg',
      'https://i.ebayimg.com/images/g/28QAAOSwiuxawq21/s-l64.jpg',
      'https://i.ebayimg.com/images/g/Sc0AAMXQxj1R6cFc/s-l300.jpg',
      'https://i.ebayimg.com/thumbs/images/g/uq8AAOSwH2VaPtPy/s-l200.jpg',
      'https://i.ebayimg.com/thumbs/images/g/zTcAAOSw92RbByQz/s-l200.jpg',
      'http://i.ebayimg.com/thumbs/images/g/iu8AAOxy~g5RqbuV/s-l96.jpg',
      'https://i.ebayimg.com/thumbs/images/g/z-IAAOSwxwRaqaLD/s-l200.jpg',
      'https://i.ebayimg.com/thumbs/images/g/JBcAAOSwEftaqMam/s-l200.jpg',
      'http://i.ebayimg.com/00/s/OTNYMzAw/z/OW4AAOSwsB9WCBf4/%25252524_10.GIF%2525253Fset_11.GIF%2525253Fset_id%2525253D807',
      'https://i.ebayimg.com/images/g/GtcAAOSwE0Zawq24/s-l64.jpg',
      'https://i.ebayimg.com/thumbs/images/g/mk8AAOSwbPNac5sw/s-l200.jpg',
    ],
    name:
      'Details About Panamax Mr4000 8outlets Surge Protector Home Theater Power Line Management',
    primaryCategories: 'Electronics',
    upc: 50616008921,
    weight: '6.5 pounds',
    countInStock: 0,
    reviews: [
      {
        $oid: '608695bd2824766b1e28389e',
      },
      {
        $oid: '6086c42608025671fa178168',
      },
      {
        $oid: '6086c49508025671fa178169',
      },
      {
        $oid: '6086c5af08025671fa17816a',
      },
    ],
  },
  {
    _id: {
      $oid: '6072e172d3391f14917616a6',
    },
    id: 'AWIm0C3TYSSHbkXwx3S6',
    prices: {
      amountMax: 299.99,
      amountMin: 299.99,
      availability: 'TRUE',
      isSale: false,
    },
    brand: 'Ultimate Ears',
    categories: [
      'Portable Bluetooth Speakers',
      'Bluetooth & Wireless Speakers',
      'Portable Audio & Video',
      'Electronics',
      'Portable Speakers & Docks',
      'Audio',
      'All Bluetooth & Wireless Speakers',
    ],
    imageURLs: [
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv18d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv15d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv11d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv17d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv14d.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81g-bmtf3cL._SL1500_.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv20d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv12d.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81Ocxhjrz%2BL._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/91nujpHIRxL._SL1500_.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv13d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903ld.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv16d.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903_sd.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/2ec846bf43460977de9b0a5545bd3454.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6019/6019903cv19d.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/918t273R4-L._SL1500_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/712C7vqRVfL._SL1500_.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/b926fe397e6e7eb4f3b9393e30aefb29.jpg',
      'https://pisces.bbystatic.com/image2/BestBuy_US/exc/videometadata/thumbnail/f42f37df2531d8ea434f448670669d29.jpg',
    ],
    name:
      'Ultimate Ears MEGABLAST Portable Wi-Fi/Bluetooth Speaker with hands-free Amazon Alexa voice control (waterproof) - Graphite Black',
    primaryCategories: 'Audio',
    upc: 97855134431,
    weight: '3.8 pounds',
    countInStock: 21,
    reviews: [
      {
        $oid: '6086960b2824766b1e28389f',
      },
      {
        $oid: '608696292824766b1e2838a0',
      },
      {
        $oid: '60890cb7864662810f51ab25',
      },
      {
        $oid: '60890cb9864662810f51ab26',
      },
      {
        $oid: '60890cbf864662810f51ab27',
      },
      {
        $oid: '60890cbf864662810f51ab28',
      },
      {
        $oid: '60890cbf864662810f51ab29',
      },
      {
        $oid: '60890cbf864662810f51ab2a',
      },
      {
        $oid: '60890cc0864662810f51ab2b',
      },
      {
        $oid: '60890cca864662810f51ab2c',
      },
      {
        $oid: '60891debda6fffd56accb7ed',
      },
      {
        $oid: '608b761d5ca28b00157513b8',
      },
    ],
  },
]
const HomeMenu = ({ saleProducts }) => {
  const dispatch = useDispatch()
  const productAllTopRated = useSelector((state) => state.productAllTopRated)
  const { loading, productTopEight, error } = productAllTopRated

  const productFetch = useSelector((state) => state.productFetch)
  const { products } = productFetch
  let specialProduct = prods[1]

  useEffect(() => {
    dispatch(listAllTopProducts())
    // if (products) {
    //   const saleProducts = products.filter(
    //     (product) =>
    //       product.prices.isSale === true &&
    //       product.prices.amountMax > product.prices.amountMin
    //   )
    //   var max = 0
    //   for (var i = 0; i < saleProducts.length; ++i) {
    //     if (
    //       saleProducts[i].prices.amountMax - saleProducts[i].prices.amountMin >
    //       max
    //     ) {
    //       specialProduct = saleProducts[i]
    //     }
    //   }
    //   console.log(specialProduct)
    // }
  }, [dispatch])

  return (
    <Row style={{ paddingTop: '0.5rem' }}>
      <Col sm={3} md={3} xl={3} style={{ paddingLeft: '2rem' }}>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle
                variant='success'
                id='dropdown-basic'
                style={{ width: '100%', height: '2.5rem' }}
              >
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: '100%' }}>
                <Dropdown.Item href='#/action-1'>Audio</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Computers</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>TV</Dropdown.Item>
                <Dropdown.Item href='#/action-4'>
                  Cameras/Camcorders
                </Dropdown.Item>
                <Dropdown.Item href='#/action-5'>Car Electronics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col>
            <SpecialProduct specialProd={specialProduct} />
          </Col>
        </Row>
      </Col>
      <Col sm={9} md={9} xl={9}>
        <Row>
          <Col style={{ marginLeft: '-1.5rem' }}>
            <Tabs defaultActiveKey='onSale' id='home-menu-tabs' fill justify>
              <Tab eventKey='onSale' title='On Sale'>
                <Row>
                  {saleProducts.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
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
                  {productTopEight.map((product) => (
                    <Col sm={12} md={6} lg={4} xl={3}>
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
    </Row>
  )
}

export default HomeMenu
