import React from 'react'
import './Navbar.css'
import icon from '../../assets/Img/Icon.png'
import icon_two from '../../assets/Img/Icon.svg'
import png1 from '../../assets/Img/1.png'
import { IoIosSearch } from "react-icons/io";
import { CiUser, CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

import { NavLink } from 'react-router-dom'



function Navbar() {
    const items = [ "Category", "Products", "Pages", "Blog", "Elements"]
    let item = items?.map((el, i) => (
        <li key={i} className='Li_nav_items'>
            {el}
        </li>
    ))
    return (
        <>
            <header>
                <div className='small_header'>
                    <div className='container'>
                        <div className='wrapper_nav'>
                            <div className='rektangle_one'>
                                <img src={icon} alt="" />
                            </div>
                            <li className='Li_nav_items' ><NavLink to={'/'} className={'login_item'}  >Home</NavLink></li>
                            <ul className='ul_item'>
                                {item}
                                <li className='Li_nav_items' ><NavLink to={'/login'} className={'login_item'}  >Login</NavLink></li>
                            </ul>
                            <div className='number_phone'>
                                <img src={icon_two} alt="" />
                                <p>+123 ( 456 ) ( 7890 )</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header'>
                    <div className='container'>
                        <div className='wrapper_nav_two'>
                            <div className='logo'>
                                <img src={png1} alt="" />
                            </div>
                            <form className="input-group">
                                <input type="text" className="input" placeholder="Search For items..." />
                                <button className="button--submit">All Categories</button>
                                <div className='serch_rektangle'>
                                    <IoIosSearch className='search_icon' />
                                </div>
                            </form>
                            <div className='icon_container_nav'>
                                <CiUser />
                                <p><NavLink to={'/admin'}>Account</NavLink></p>
                                <CiHeart />
                                <p>Wishlist</p>
                                <FiShoppingCart />
                                <p>Cart</p>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar;