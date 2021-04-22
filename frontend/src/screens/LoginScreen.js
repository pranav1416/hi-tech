import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LoginForm from '../components/LoginForm';
import { Row, Col } from 'react-bootstrap'


const LoginScreen = (props) => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    
    return () => {
      
    }
  }, [dispatch, props.match])


  console.log(props.match.params.id)
  //const product = products.products.find((x) => x._id === props.match.params.id)
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