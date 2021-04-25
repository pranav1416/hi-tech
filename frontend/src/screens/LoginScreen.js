import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { Row, Col } from 'react-bootstrap'

const LoginScreen = ({ history }) => {
  console.log('User Login page ' + JSON.stringify(history));
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const [redirecturl, setRedirectUrl] = useState("");
  if (history && history.location && history.location.search) {
    var urls = history.location.search.split('=');
    if (userInfo && urls && urls.length > 1) {
      setRedirectUrl("/"+urls[1]);
      history.push(redirecturl);
    }
  }

  useEffect(() => {
    if (userInfo) {
      history.push(redirecturl);
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
