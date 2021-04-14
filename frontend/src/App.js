import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Checkout from './screens/Checkout'
import Browser from './screens/Browser'

import OrderReceipt from './components/OrderReceipt'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />

        {/* py-3 is used to give vertical padding */}
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/browser' component={Browser} />
        <Route path='/orderReceipt' component={OrderReceipt} />
        <main className='py-3'>
          <Container>
            <Route path='/' exact={true} component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </BrowserRouter>
  )
}

export default App
