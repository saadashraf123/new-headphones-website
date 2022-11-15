import React from 'react'
import { urlFor } from '../client';
import { Link } from 'react-router-dom';
import Functions from './Functions';

const FooterBanner = () => {
    const [products, banner, footerBanner] = Functions();
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{footerBanner.discount}</p>
                    <h3>{footerBanner.largeText1}</h3>
                    <h3>{footerBanner.largeText2}</h3>
                    <p>{footerBanner.saleTime}</p>
                </div>
                <div className="right">
                    <p>{footerBanner.smallText}</p>
                    <h3>{footerBanner.midText}</h3>
                    <p>{footerBanner.desc}</p>
                    <Link to={`/productDetails/${footerBanner.product}`} state={{ product: footerBanner.product }}>
                        <button type="button">{footerBanner.buttonText}</button>
                    </Link>
                </div>

                <img
                    src={footerBanner.image ? urlFor(footerBanner.image) : ""} className="footer-banner-image"
                />
            </div>
        </div>
    )
}

export default FooterBanner