import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
const App = () => {
  return (
    <>
    <Header/>
    {/* py-3 is used to give vertical padding */}
    <main className="py-3">
      <Container>
        <h1>Welcome to Hi-Tech Store</h1>
        <HomeScreen/>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;
