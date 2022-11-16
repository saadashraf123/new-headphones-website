import React, { useState, useEffect } from 'react'
import list from '../db.json';
import axios from 'axios'


const Functions = () => {
    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState({})
    const [footerBanner, setFooterBanner] = useState({})

    useEffect(() => {
        axios.get(list.banner)
            .then((data) => {
                setBanner(data[0])
                setFooterBanner(data[1])
            }
            )

        axios.get(list.product)
            .then((data) => {
                setProducts(data)
            }
            )
    }, [])
    return [products, banner, footerBanner]
}

export default Functions