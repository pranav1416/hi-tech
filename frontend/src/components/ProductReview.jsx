import React, { useEffect, useState } from 'react'
import { Tabs, Tab, ListGroup, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import WriteReview from './WriteReview'


const ProductReview = ({ product }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="customer reviews" title="Customer Reviews">
                <ListGroup>
                    <ListGroup.Item> {product.reviewName} ({product.reviewRating} / 5): {product.reviewComment}</ListGroup.Item>
                    
                </ListGroup>
            </Tab>
            <Tab eventKey="write your review" title="Write Your Review">
                <>
                    {
                        userInfo ? (
                            <WriteReview user={userInfo} />
                            
                        ) : (
                            <h2> Please Login </h2>
                        )
                    }
                </>
            </Tab>
        </Tabs>
    )
}
export default ProductReview
