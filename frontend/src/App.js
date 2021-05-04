import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import Checkout from './screens/Checkout'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import OrderHistory from './screens/OrderHistoryScreen'

import OrderReceipt from './components/OrderReceipt'
import BrowsingScreen from './screens/BrowsingScreen'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        {/* py-3 is used to give vertical padding */}
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orderReceipt' component={OrderReceipt} />
        <Route path='/orderHistory' component={OrderHistory} />
        <main>
          {/* <Route path='/search/:keyword' component={BrowsingScreen} /> */}
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={BrowsingScreen}
          />
          <Route path='/' exact={true} component={HomeScreen} />
        </main>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
