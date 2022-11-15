import React, { useState, useEffect } from 'react'
import { urlFor, client } from '../client';


const Functions = () => {
    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState({})
    const [footerBanner, setFooterBanner] = useState({})

    useEffect(() => {
        const query = '*[_type == "banner"]';
        client.fetch(query)
            .then((data) => {
                setBanner(data[0])
                setFooterBanner(data[1])
            }
            )

        const query1 = '*[_type == "product"]';
        client.fetch(query1)
            .then((data) => setProducts(data))
    }, [])
    return [products, banner, footerBanner]
}

export default Functions