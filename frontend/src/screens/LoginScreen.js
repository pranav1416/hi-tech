import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { Row, Col } from 'react-bootstrap'

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
    return () => {}
  }, [dispatch, history])

  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <LoginForm />
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}
export default LoginScreen
