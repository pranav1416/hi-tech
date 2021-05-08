import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Jumbotron,
  Modal,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { login, register } from '../actions/userActions'
import { useHistory } from 'react-router'

const SignUp = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addr1, setAddr1] = useState('')
  const [addr2, setAddr2] = useState('')
  const [city, setCity] = useState('')
  const [stateName, setStateName] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState({})
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  const dispatch = useDispatch()

  useEffect(() => {
    //console.log('login')
  }, [dispatch])

  const submitHandler = (e) => {
    const address = {
      addr1,
      addr2,
      city,
      state: stateName,
      zipcode,
    }
    e.preventDefault()
    setAddress(address)
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(firstName, lastName, email, address, password))
      handleClose()
    }
  }

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create Account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form>
            <Row>
              <Col>
                <Form.Group controlId='formBasicFirstName'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type='firstname'
                    placeholder='Enter First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formBasicLastName'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type='lastname'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Label>Delivery Address</Form.Label>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId='addressLine'>
                  <Form.Control
                    placeholder='Address Line 1'
                    value={addr1}
                    onChange={(e) => setAddr1(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='addresssss'>
                  <Form.Control
                    placeholder='Address Line 2'
                    value={addr2}
                    onChange={(e) => setAddr2(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='cityField'>
                  <Form.Control
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='stateField'>
                  <Form.Control
                    placeholder='State'
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='zipcodeField'>
                  <Form.Control
                    type='number'
                    placeholder='Zipcode'
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='primary' onClick={submitHandler}>
            Create Your Hi-Tech Account
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [dispatch, history, userInfo, userLogin])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Container className='border border-succes my-3 p-3 rounded'>
      <Row>
        <Col xs={12} className='text-center'>
          <Form onSubmit={handleSubmit}>
            <h1> Sign-In </h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Sign in
            </Button>
            <Jumbotron className='bg-transparent'>
              <h5> New to Hi-Tech? </h5>
              <p>
                {/* <Button variant="primary">Create Account</Button> */}
                <SignUp />
              </p>
            </Jumbotron>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default LoginForm
