import React, { useEffect, useState } from 'react'
import { Tabs, Tab, ListGroup, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


const WriteReview = ({ user }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    return (
        <Form>
        <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="5">
            Your Name
            </Form.Label>
            <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={user.firstName} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextRating">
            <Form.Label column sm="5">
            Overall Rating (1-5)
            </Form.Label>
            <Col sm="10">
            <Form.Control type="rating" placeholder="How this product is working for you?" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextRating">
            <Form.Label column sm="5">
            Your Review
            </Form.Label>
            <Col sm="10">
            <Form.Control type="rating" placeholder="Share details about what you like or dislike." />
            </Col>
        </Form.Group>
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