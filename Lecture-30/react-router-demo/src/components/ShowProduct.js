import React from 'react'
import { useParams } from 'react-router-dom';

const ShowProduct = () => {

    const params = useParams();

    return (
        <div>
            <h1>Product with the id { params.productid }</h1>
        </div>
    )
}

export default ShowProduct
