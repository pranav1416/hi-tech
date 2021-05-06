//To find the page the user is at. All categories/Laptops/Accessories
import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


const Path = () => {
    return (
    <div>
  <Breadcrumb style = {{paddingTop: '-100px', paddingLeft: '180px', width: '30%'}}>
  <Breadcrumb.Item href="/laptops">  Laptops</Breadcrumb.Item>
  <Breadcrumb.Item href="/topselling">Top Selling</Breadcrumb.Item>
  <Breadcrumb.Item active>ModelNUmber</Breadcrumb.Item>
</Breadcrumb>
    </div>
    )
}

export default Path
