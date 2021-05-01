import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {render} from 'react-dom'
import { useState } from "react";
import Product from './Product';


const BannerAdd = () => {
    return(  
      <>
  <Carousel style={{width: '1700px', height: '450px',paddingLeft: '50px', paddingTop: '30px'}} >
  <Carousel.Item >
    <img style={{ width: '400px', height: '360px'}}
      className="d-block w-100"
      src= '../images/tvbanner.jpg'
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style={{  width: '400px', height: '360px'}}
      className="d-block w-100"
      src= '../images/sandisk1.jpg'
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ width: '400px', height: '360px'}}
      className="d-block w-100"
      src='../images/controllerbanner.jpg'
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</>
  )
    }

export default BannerAdd
    