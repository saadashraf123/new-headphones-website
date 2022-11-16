import React, { useState, useEffect } from 'react'
import data from '../db.json';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    const banner = data.banner[0];
    return (
        <>
            {
                banner ?
                    <div className="hero-banner-container">
                        <p className="beats-solo">{banner.smallText}</p>
                        <h3>{banner.midText}</h3>
                        <h1>{banner.largeText1}</h1>
                        <img src={require(`../assets/${banner.image}`)} alt="headphones" className="hero-banner-image" />
                        <div>
                            <Link to={`/productDetails/${banner.name}`} state={{ product: banner }} >
                                <button type="button">{banner.buttonText}</button>
                            </Link>

                            <div className="desc">
                                <h5>Description:</h5>
                                <p>{banner.details}</p>
                            </div>
                        </div>
                    </div>

                    : ("Nothing To Show")
            }
        </>
    )
}

export default HeroBanner