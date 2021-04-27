import React, { useEffect, useState } from 'react'
import { Tabs, Tab, ListGroup, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import WriteReview from './WriteReview'


const ProductReview = ({ product }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // const dispatch = useDispatch()

    // const productList = useSelector((state) => state.productList)
    // const {  products } = productList

    // useEffect(() => {
    //     dispatch(listProducts())
    // }, [dispatch])

    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="customer reviews" title="Customer Reviews">
                {/* <List> 
                    reviews.map.((review) => {  
                        <ReviewListItemComponentreview = {review} /> 
                    })
                </List> */}
                <ListGroup>
                        {product.reviews?.map((review) => (
                        <ListGroup.Item> 
                            {review.reviewName} 
                            ({review.reviewRating} / 5): {review.reviewComment}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                
    
            </Tab>
            <Tab eventKey="write your review" title="Write Your Review">
                <>
                    {
                        userInfo ? (
                            <WriteReview product={product} user={userInfo} />
                            
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
