import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

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
  const [editName, setEditName] = useState(true)
  const [editEmail, setEditEmail] = useState(true)
  const [editPassword, setEditPassword] = useState(true)
  const [editAddress, setEditAddress] = useState(true)
  const [action, setAction] = useState('')

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.firstName) {
        dispatch(getUserDetails('profile'))
      } else {
        setEditName(true)
        setEditPassword(true)
        setEditEmail(true)
        setEditAddress(true)
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
    //console.log(editName)
  }, [dispatch, history, userInfo, user])

  useEffect(() => {
    dispatch(getUserDetails('profile'))
  }, [success])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ProfileScreen Action :', action)
    switch (action) {
      case 'name':
        console.log('Name Change- ', action, firstName, lastName)
        dispatch(
          updateUserProfile({ _id: user._id, action, firstName, lastName })
        )
        break
      case 'password':
        if (password !== confirmPassword) {
          setMessage('Passwords do not match')
        } else {
          dispatch(updateUserProfile({ _id: user._id, action, password }))
        }
        break
      case 'email':
        dispatch(updateUserProfile({ _id: user._id, action, email }))
        break
      case 'address':
        setAddress({ addr1, addr2, city, stateName, zipcode })
        dispatch(updateUserProfile({ _id: user._id, action, address }))
        break
      default:
        throw new Error('Invalid Action')
    }
  }

  const handleName = (e) => {
    e.preventDefault()
    setAction('name')
    setEditName(!editName)
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setAction('email')
    setEditEmail(!editEmail)
  }
  const handlePassword = (e) => {
    e.preventDefault()
    setAction('password')
    setEditPassword(!editPassword)
  }
  const handleAddress = (e) => {
    e.preventDefault()
    setAction('address')
    setEditAddress(!editAddress)
  }
  return (
    <>
      <Container>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='light'>Profile Updated!</Message>}
        {loading && <Loader />}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group controlId='formBasicFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='firstname'
                  placeholder='Enter First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  disabled={editName}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId='formBasicLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='lastname'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  disabled={editName}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant='light' className='my-4' onClick={handleName}>
                <i class='far fa-edit'></i>
              </Button>
            </Col>
            {!editName && (
              <Col md={2}>
                <Button
                  type='submit'
                  variant='dark'
                  className='my-4'
                  disabled={editName}
                >
                  Update Name
                </Button>
              </Col>
            )}
          </Row>
        </Form>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={editEmail}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant='light' className='my-4' onClick={handleEmail}>
                <i class='far fa-edit'></i>
              </Button>
            </Col>
            {!editEmail && (
              <Col md={2}>
                <Button
                  type='submit'
                  variant='dark'
                  className='my-4'
                  disabled={editEmail}
                >
                  Update Email
                </Button>
              </Col>
            )}
          </Row>
        </Form>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={editPassword}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={editPassword}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant='light' className='my-4' onClick={handlePassword}>
                <i class='far fa-edit'></i>
              </Button>
            </Col>
            {!editPassword && (
              <Col md={2}>
                <Button
                  type='submit'
                  variant='dark'
                  className='my-4'
                  disabled={editPassword}
                >
                  Update Password
                </Button>
              </Col>
            )}
          </Row>
        </Form>

        <Row>
          <Col>
            <Form.Label>Delivery Address</Form.Label>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group controlId='addressLine'>
                <Form.Control
                  placeholder='Address Line 1'
                  value={addr1}
                  onChange={(e) => setAddr1(e.target.value)}
                  required
                  disabled={editAddress}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button variant='light' onClick={handleAddress}>
                <i class='far fa-edit'></i>
              </Button>
            </Col>
            {!editAddress && (
              <Col md={2}>
                <Button type='submit' variant='dark' disabled={editAddress}>
                  Update Address
                </Button>
              </Col>
            )}
          </Row>
          <Row>
            <Col md={3}>
              <Form.Group controlId='addresssss'>
                <Form.Control
                  placeholder='Address Line 2'
                  value={addr2}
                  onChange={(e) => setAddr2(e.target.value)}
                  disabled={editAddress}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <Form.Group controlId='cityField'>
                <Form.Control
                  placeholder='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  disabled={editAddress}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Form.Group controlId='stateField'>
                <Form.Control
                  placeholder='State'
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  required
                  disabled={editAddress}
                />
              </Form.Group>
            </Col>
            <Col md={1}>
              <Form.Group controlId='zipcodeField'>
                <Form.Control
                  type='number'
                  placeholder='Zipcode'
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                  disabled={editAddress}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default ProfileScreen
