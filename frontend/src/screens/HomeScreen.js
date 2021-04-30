// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col, FormControl, Form } from 'react-bootstrap'
// import Product from '../components/Product'
// import { listProducts } from '../actions/productActions'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import BannerAdd from '../components/BannerAdd'
// import  ProductSale from '../components/ProductSale'
// import ProductAdd from '../components/ProductAdd'
// import ProductsDisplayed from '../components/ProductsDisplayed'



// const HomeScreen = () => {
//   // PRODUCT SCREEN MODULE : [TESTING]
//   // Add to cart and quantity select
//   const [qty, setQty] = useState(0)

//   const dispatch = useDispatch()

//   const productList = useSelector((state) => state.productList)
//   const { loading, products, error } = productList

//   useEffect(() => {
//     dispatch(listProducts())
//   }, [dispatch])

  
//   return (
//  <>
//       <h1>Welcome to Hi-Tech Store</h1>
//       <>
//       <BannerAdd />

//       </>
//       <ProductsDisplayed/>

//       {loading ? (
//       <Loader /> 
//       ) : error ? (
//         <Message variant='danger'>{error}</Message>
//       ) : (
//         <>
//         <Row style = {{paddingTop: '450px'}}>
//           {products.map((product) => (
//             <Col sm={12} md={6} lg={4} xl={3}>
//               {product.prices.isSale ? ( 
//                 <ProductSale style= {{paddingTop: '10px'}} product={product} />
//               ) : (
//               <Product style= {{paddingTop: '10px'}} product={product} />
//               )}
//             </Col>
//           ))}
//         </Row>
//         </> 
//       )}
//       </>
//   )
// }

// export default HomeScreen






//   // const[posts, setPosts] = useState([])
//   // useEffect(() => {
//   //   axios 
//   //   .get("http://localhost:5001/products")
//   //   .then(res => setPosts(res.data))
//   //   .catch(error => console.log(error))

//   // })



//       // {/* <Route to= "/api/products" render = {() =>  <ProductSale posts = {posts} />} /> */}

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import BannerAdd from '../components/BannerAdd'
import  ProductSale from '../components/ProductSale'
import ProductAdd from '../components/ProductAdd'
import ProductsDisplayed from '../components/ProductsDisplayed'



const HomeScreen = () => {
  // PRODUCT SCREEN MODULE : [TESTING]
  // Add to cart and quantity select
  const [qty, setQty] = useState(0)

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
 <>
      <h1>Welcome to Hi-Tech Store</h1>
      <>
      <BannerAdd />

      </>
      <ProductsDisplayed/>

      {loading ? (
      <Loader /> 
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row style = {{paddingTop: '450px'}}>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              {product.prices.isSale ? ( 
                <ProductSale style= {{paddingTop: '10px'}} product={product} />
              ) : (
              <Product style= {{paddingTop: '10px'}} product={product} />
              )}
            </Col>
          ))}
        </Row>
        </> 
      )}
      </>
  )
}

export default HomeScreen