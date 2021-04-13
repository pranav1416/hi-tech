import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Checkout from './screens/Checkout'
<<<<<<< HEAD
import Browse from './screens/Browser'
import ProductObject from './components/ProductObject'
import Navigation from './components/Navigation'
import Pages from './components/Pages'

=======
import OrderReceipt from './components/OrderReceipt'
>>>>>>> 82f0cc725278b8a008334c93ebc61d56d9607101

const App = () => {
  return (
    <BrowserRouter>
    <>
    <Header/>
    <Navigation/>
  
    {/* py-3 is used to give vertical padding */}
    <Route path="/product/:id" component={ProductScreen}/>
    <Route path="/checkout" component={Checkout}/>
<<<<<<< HEAD
    <Route path="/browser" component={ProductObject}/>
=======
    <Route path="/orderReceipt" component={OrderReceipt}/>
>>>>>>> 82f0cc725278b8a008334c93ebc61d56d9607101
    <main className="py-3">
      <Container>
        <Route path="/" exact={true} component={HomeScreen}/>
      </Container>
    </main>
    <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
