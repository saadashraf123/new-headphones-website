import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Functions from './Functions'
import { urlFor } from '../client';


const Items = ({ products }) => {
    return (
        <div className='products-container'>
            {products?.map((data, index) =>
                <Link to={`/productDetails/${data.name}`} state={{ product: data.name }}>
                    <div key={data._id} className="product-card">
                        <img
                            src={urlFor(data.image && data.image[0])}
                            width={250}
                            height={250}
                            className="product-image"
                        />
                        <p className="product-name">{data.name}</p>
                        <p className="product-price">${data.price}</p>
                    </div>
                </Link>
            )
            }
        </div >
    )
}

export default Items