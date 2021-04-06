import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'

const ProductScreen = ({match}) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`/api/products/${match.params.id}`)
            setProduct(res.data)
        }

        fetchProduct()
    }, [match])

    return <Product product={product}/>
}
export default ProductScreen;