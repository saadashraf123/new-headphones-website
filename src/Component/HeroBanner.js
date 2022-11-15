import React, { useState, useEffect } from 'react'
import { urlFor } from '../client';
import { Link } from 'react-router-dom';
import Functions from './Functions';

const HeroBanner = () => {
    const [products, banner, footerBanner] = Functions();
    return (
        <>
            {
                banner ?
                    <div className="hero-banner-container">
                        <p className="beats-solo">{banner.smallText}</p>
                        <h3>{banner.midText}</h3>
                        <h1>{banner.largeText1}</h1>
                        <img src={banner.image ? urlFor(banner.image) : ""} alt="headphones" className="hero-banner-image" />
                        <div>
                            <Link to={`/productDetails/${banner.product}`} state={{ product: banner.product }} >
                                <button type="button">{banner.buttonText}</button>
                            </Link>

                            <div className="desc">
                                <h5>Description:</h5>
                                <p>{banner.desc}</p>
                            </div>
                        </div>
                    </div>

                    : ("Nothing To Show")
            }
        </>
    )
}

export default HeroBanner