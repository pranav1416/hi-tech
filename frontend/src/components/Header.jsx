import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
 
const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
                <Container>    
                    <Navbar.Brand href="#home">Hi-Tech</Navbar.Brand>
                    <Nav className="mr-auto">
                    {/* <i> This tag is used to get font-awesome icons which I have imported as CDN in index.html
                        We can use this to give icons for links in the navbar like cart, login etc
                     */}
                    <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i> Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
