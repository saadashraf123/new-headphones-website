import React from 'react'
import Items from './Items'
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import FooterBanner from './FooterBanner';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails'
import Functions from './Functions';
import Success from './Success';
import Checkout from './Checkout';

const Layout = () => {
    const [products, heroBanner] = Functions();
    return (
        <div className='layout'>
            <Routes>
                <Route path='/' element={
                    <>
                        <HeroBanner />
                        <div className='products-heading'>
                            <h2>Best Seller Products</h2>
                            <p>There are many products in our store</p>
                        </div>
                        <div className='products-container'>
                            <Items products={products} />
                        </div>
                        <FooterBanner />
                    </>
                } />
                <Route path='/productDetails/*' element={<ProductDetails />} />
                <Route path='/checkOut' element={<Checkout />} />
                <Route path='/success' element={<Success />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout