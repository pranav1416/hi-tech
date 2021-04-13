import React from 'react'
import ProductObject from '../components/ProductObject'
import Navigation from '../components/Navigation'
import Pages from '../components/Pages'
import { Navbar, Nav, Form, FormControl, Button, Containe, Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col} from 'react-bootstrap'




const Browser = () => {
{
 return (
     <>
<h1>Browser</h1>
<Navigation/>
<ProductObject/>

</>
)

}
}


export default Browser;