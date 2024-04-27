import React, { useState, useEffect } from 'react'
import './Card.css'
import { CiStar } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { API_URL } from '../Static/static.js'
import axios from 'axios';
import Loader from '../Loader/Loader.jsx';


function Card() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        axios
            .get(API_URL)
            .then(res => setdata(res.data.products))
            .catch(err => console.log(err))
            .finally(() => setloading(false))
    }, [])

    let cards = data?.slice(0, 8).map((el) => (
        <div className='card' key={el.id}>
            <div className='rating_card'>
                <p>{el.rating}</p>
            </div>
            <div className='card_img_wrapper'>
                <img src={el.thumbnail} alt="" />
            </div>
            <div className='card_text_content'>
                <p className='category'>{el.category}</p>
                <p className='text_title'>{el.title}</p>
                <div className='star_wrapper'>
                {/* {new Array(Math.round(el.rating)).fill(<CiStar/>)} */}
                </div>
                <p className='buy_p'>By <b>NestFood</b> </p>
                <div className='price_container'>
                    <p className='price'>${el.price}</p>
                    <p className='old_price'>stock {el.stock}</p>
                    <button><FiShoppingCart />Add cart</button>
                </div>
            </div>
        </div>
    ))


    let card_item = ["All", "Milks & Dairies", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"];
    let item = card_item?.map((el, i) => (
        <li className='li_card_item' key={i}>
            {el}
        </li>
    ))

    return (
        <>
            <div className='container'>
                <div className="card_title">
                    <h1>Popular Products</h1>
                    <ul className='ul_item_card'>
                        {item}
                    </ul>
                </div>
                <div className='card_flex'>
                    {loading ? <Loader/> : cards}
                </div>
            </div>
        </>
    )
}

export default Card;