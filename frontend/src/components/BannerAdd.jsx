import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {render} from 'react-dom'
import { useState } from "react";
import Product from './Product';


const BannerAdd = () => {
    return(  
      <>
  <Carousel style={{ width: '1500px', height: '200px', paddingLeft: '400px'}} >
  <Carousel.Item>
    <img style={{ width: '400px', height: '360px'}}
      className="d-block w-100"
      src= '../images/headphones.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3> Wireless Sport Headphones</h3>
      <p style = {{color: 'white', fontSize : '60px'}}>$79.95</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{  width: '400px', height: '360px'}}
      className="d-block w-100"
      src= '../images/sandisk.jpg'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>SandDisk Drive for Laptops</h3>
      <p style = {{color: 'red', fontSize : '60px'}} >$199.74</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width: '400px', height: '360px'}}
      className="d-block w-100"
      src='../images/controller.jpg'
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Wireless Controller</h3>
      <p style = {{color: 'red', fontSize : '60px'}}>$59.99</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
  )
    }

export default BannerAdd
    