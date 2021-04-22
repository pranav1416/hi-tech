import React, { useEffect, useState } from 'react'
import { Tabs, Tab, ListGroup, Form, Button } from 'react-bootstrap'



const ProductReview = ({ product }) => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="customer reviews" title="Customer Reviews">
                <ListGroup>
                    <ListGroup.Item> {product.reviewName} ({product.reviewRating} / 5): {product.reviewComment}</ListGroup.Item>
                    
                </ListGroup>
            </Tab>
            <Tab eventKey="write your review" title="Write Your Review">
                <>
                    <Form.Label htmlFor="name">Your Name</Form.Label>
                    <Form.Control
                        type="name"
                        id="name"
                        aria-describedby="nameBlock"
                        // onChange={(e) => { setName(e.target.value);}}
                    />
                    <Form.Text id="nameBlock" muted>
                        This will show up on your review.
                    </Form.Text>
                </>
                <></>
                <>
                    <Form.Label htmlFor="rating">Overall Rating (1-5)</Form.Label>
                    <Form.Control
                        type="rating"
                        id="rating"
                        aria-describedby="ratingBlock"
                        // onChange={(e) => { setRating(e.target.value);}}
                    />
                    <Form.Text id="ratingBlock" muted>
                        How this product is working for you?
                    </Form.Text>
                </>
                <>
                    <Form.Label htmlFor="review">Your Review</Form.Label>
                    <Form.Control
                        type="review"
                        id="review"
                        aria-describedby="reviewBlock"
                        // onChange={(e) => { setReview(e.target.value);}}
                    />
                    <Form.Text id="reviewBlock" muted>
                        Share details about what you like or dislike.
                    </Form.Text>
                    <Button variant="primary"> Submit </Button>
                </>
            </Tab>
        </Tabs>
    )
}
export default ProductReview
