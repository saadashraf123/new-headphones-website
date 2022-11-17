import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({ products }) => {
    return (
        <div className='products-container'>
            {products?.map((data, index) =>
                <Link to={`/new-headphones-website/productDetails/${data.name}`} state={{ product: data }}>
                    <div key={data.id} className="product-card">
                        <img
                            src={require(`../assets/${data.image[0]}`) && require(`../assets/${data.image[0]}`)}
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