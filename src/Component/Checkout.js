import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom'
import { useStateContext } from './StateContext';

const Checkout = () => {
    const { totalPrice, cartItems, setShowCart, onRemove } = useStateContext();

    return (
        <div className='row'>
            <div className={`checkout-container ${cartItems < 1 ? "col-lg-12 col-md-12" : "col-lg-6 col-md-11"} `}>
                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link to='/new-headphones-website'>
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                                className="btn"
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="product" key={item._id}>
                            <img src={require(`../assets/${item.image[0]}`)} className="cart-product-image" />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.name}</h5>
                                    <h4>${item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <h6 className="">
                                            <span className="num">Quantity: {item.quantity}</span>
                                        </h6>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                    </div>
                )}
            </div>
            <div className="checkout-form col-lg-5 col-md-10">
                {cartItems.length >= 1 &&
                    <form action='/success'>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" required />
                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Address" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Phone Number" required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" required />
                            <label className="form-check-label">Agreed to T&Cs</label>
                        </div>

                        <div className="btn-container">
                            <button type="submit" className="btn">
                                Pay Now
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div >
    )
}

export default Checkout