import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form, Button } from 'react-bootstrap'

const AddToCart = ({ maxCount }) => {
  const qty = 1
  return (
    <>
      <Row>
        <Col>
          <Button variant='light' className={`${maxCount}`}>
            -
          </Button>
        </Col>
        <Col>
          <Form.Control type='text' value={qty} readOnly></Form.Control>
        </Col>
        <Col>
          <Button variant='light'>+</Button>
        </Col>
      </Row>
    </>
  )
}

export default AddToCart
