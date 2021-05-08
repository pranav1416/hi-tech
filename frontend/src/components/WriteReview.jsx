import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { review } from '../actions/reviewActions'

const WriteReview = ({ product, user }) => {
  // const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  useEffect(() => {
    //console.log('login')
  }, [dispatch])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(review(product.product, user.firstName, rating, comment))
    window.location.reload(false)
    console.log(product.product)
  }

  return (
    <Form>
      <Form.Group as={Row} controlId='formPlaintextName'>
        <Form.Label column sm='5'>
          Your Name
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            plaintext
            readOnly
            defaultValue={user.firstName}
            // onChange={(e) => { setName(e.target.value);}}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formPlaintextRating'>
        <Form.Label column sm='10'>
          Overall Rating (How this product is working for you?)
        </Form.Label>
        <Col sm='10'>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className='mb-3'>
              <Form.Check
                inline
                label='1'
                name='group1'
                type={type}
                id={`inline-${type}-1`}
                value={rating}
                onChange={(e) => {
                  setRating('1')
                }}
              />
              <Form.Check
                inline
                label='2'
                name='group2'
                type={type}
                id={`inline-${type}-2`}
                value={rating}
                onChange={(e) => {
                  setRating('2')
                }}
              />
              <Form.Check
                inline
                label='3'
                name='group3'
                type={type}
                id={`inline-${type}-3`}
                value={rating}
                onChange={(e) => {
                  setRating('3')
                }}
              />
              <Form.Check
                inline
                label='4'
                name='group4'
                type={type}
                id={`inline-${type}-4`}
                value={rating}
                onChange={(e) => {
                  setRating('4')
                }}
              />
              <Form.Check
                inline
                label='5 stars'
                name='group5'
                type={type}
                id={`inline-${type}-5`}
                value={rating}
                onChange={(e) => {
                  setRating('5')
                }}
              />
            </div>
          ))}
        </Col>
        {/* <Col sm="10">
            <Form.Control 
                type="rating" 
                placeholder="How this product is working for you?" 
                value={rating}
                onChange={(e) => { setRating(e.target.value);}}
            />
            </Col> */}
      </Form.Group>

      <Form.Group as={Row} controlId='formPlaintextRating'>
        <Form.Label column sm='5'>
          Your Review
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            type='comment'
            placeholder='Share details about what you like or dislike.'
            value={comment}
            onChange={(e) => {
              setComment(e.target.value)
            }}
          />
        </Col>
      </Form.Group>
      <Button variant='primary' onClick={submitHandler} type='submit'>
        {' '}
        Submit{' '}
      </Button>
    </Form>

    // <Tab eventKey="write your review" title="Write Your Review">
    //     <>
    //     <h2> {user.firstName} </h2>
    //     {/* <Form.Label htmlFor="name"> {user.firstName} </Form.Label>
    //     <Form.Control
    //     type="name"
    //     id="name"
    //                 aria-describedby="nameBlock"
    //                 // onChange={(e) => { setName(e.target.value);}}
    //             />
    //             <Form.Text id="nameBlock" muted>
    //                 This will show up on your review.
    //             </Form.Text> */}
    //         </>
    //         <></>
    //         <>
    //             <Form.Label htmlFor="rating">Overall Rating (1-5)</Form.Label>
    //             <Form.Control
    //                 type="rating"
    //                 id="rating"
    //                 aria-describedby="ratingBlock"
    //                 // onChange={(e) => { setRating(e.target.value);}}
    //             />
    //             <Form.Text id="ratingBlock" muted>
    //                 How this product is working for you?
    //             </Form.Text>
    //         </>
    //         <>
    //             <Form.Label htmlFor="review">Your Review</Form.Label>
    //             <Form.Control
    //                 type="review"
    //                 id="review"
    //                 aria-describedby="reviewBlock"
    //                 // onChange={(e) => { setReview(e.target.value);}}
    //             />
    //             <Form.Text id="reviewBlock" muted>
    //                 Share details about what you like or dislike.
    //             </Form.Text>
    //             <Button variant="primary"> Submit </Button>
    //         </>
    //     </Tab>
  )
}
export default WriteReview
