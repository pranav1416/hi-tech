import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
const App = () => {
  return (
    <BrowserRouter>
    <>
    <Header/>
    {/* py-3 is used to give vertical padding */}
    <main className="py-3">
      <Container>
        <h1>Welcome to Hi-Tech Store</h1>
        <Route path="/" exact={true} component={HomeScreen}/>
        <Route path="/products/:_id" component={ProductScreen}/>
      </Container>
    </main>
    <Footer/>
    </>
    </BrowserRouter>
  );
}

export default App;
