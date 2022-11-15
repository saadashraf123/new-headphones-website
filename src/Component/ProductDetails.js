import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Functions from "./Functions";
import Items from './Items';
import { useStateContext } from './StateContext'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const ProductDetails = () => {
    const [products] = Functions();
    const location = useLocation();
    const product = location.state.product;
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0);

    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();


    useEffect(() => {
        const query = `*[_type == "product" && name == '${product}'][0]`
        client.fetch(query)
            .then((data) => {
                setData(data)
            }
            )
    }, [product])

    return (
        <>
            {data ?
                <>
                    <ToastContainer />
                    <div className="product-detail-container">
                        <div>
                            <div className="image-container">
                                <img src={data.image ? urlFor(data.image && data.image[index]) : ""} className="product-detail-image" />
                            </div>
                            <div className="small-images-container">
                                {data.image?.map((item, i) => (
                                    <img
                                        key={i}
                                        src={urlFor(item)}
                                        className={i === index ? 'small-image selected-image' : 'small-image'}
                                        onMouseEnter={() => setIndex(i)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="product-detail-desc">
                            <h1>{data.name}</h1>
                            <div className="reviews">
                                <div>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiOutlineStar />
                                </div>
                                <p>
                                    (20)
                                </p>
                            </div>
                            <h4>Details: </h4>
                            <p>{data.details}</p>
                            <p className="price">${data.price}</p>
                            <div className="quantity">
                                <h3>Quantity:</h3>
                                <p className="quantity-desc">
                                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                                    <span className="num">{qty}</span>
                                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                                </p>
                            </div>
                            <div className="buttons">
                                <button type="button" className="add-to-cart" onClick={() => onAdd(data, qty)}>Add to Cart</button>
                                <Link to='/checkOut'>
                                    <button type="button" className="btn buy-now" onClick={() => onAdd(data, qty)} >
                                        Buy Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="maylike-products-wrapper">
                        <h2>You may also like</h2>
                        <div className="marquee">
                            <div className="maylike-products-container track">
                                {/* {products?.map((item) => ( */}
                                <Items products={products} />
                                {/* ))} */}
                            </div>
                        </div>
                    </div>
                </>
                : "Loading..."}
        </>
    )
}

export default ProductDetails