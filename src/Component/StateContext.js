import React, { useState, useEffect, createContext, useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const Context = createContext();
const StateContext = ({ children }) => {

    const [qty, setQty] = useState(1)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [totalQuantities, setTotalQuantities] = useState(0)

    let foundProduct;
    let index;

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        if (qty > 1) {
            setQty((prevQty) => prevQty - 1)
        }
    }

    const onAdd = (product, quantity) => {
        console.log(product);
        const checkProductInCart = cartItems.find((item) => item.id === product.id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct.id === product.id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        console.log(cartItems);
        toast.success(`${qty} ${product.name} added to the cart.`);
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item.id === id)
        index = cartItems.findIndex((product) => product.id === id);

        const newCartItems = cartItems.filter((item) => item.id !== id)

        if (value === 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.id === product.id)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)

        const newCartItems = cartItems.filter((item) => item.id !== product.id)
        setCartItems(newCartItems);
    }

    return (
        <Context.Provider
            value={{
                incQty,
                decQty,
                qty,
                onAdd,
                showCart,
                setShowCart,
                totalQuantities,
                toggleCartItemQuantity,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
                cartItems,
                totalPrice,
                onRemove
            }}>
            {children}
        </Context.Provider>
    )
}

export default StateContext

export const useStateContext = () => useContext(Context);
