import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails } from '../actions/userActions'

const ProfileScreen = ({ history }) => {
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

  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  useEffect(() => {
    if (!userInfo) {
      history.pushState('/login')
    } else {
      if (!user.firstName) {
        dispatch(getUserDetails('profile'))
      } else {
        setEmail(user.email)
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setAddr1(user.address[0].addr1)
        setAddr2(user.address[0].addr2)
        setCity(user.address[0].city)
        setStateName(user.address[0].state)
        setZipcode(user.address[0].zipcode)
      }
    }
  }, [dispatch, history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      //DISPATCH UPDATE PROFILE
    }
  }
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={handleSubmit}>
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
          <Row>
            <Col>
              <Button type='submit' variant='primary'>
                Update Profile
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col md={9}></Col>
    </Row>
  )
}

export default ProfileScreen
