import React from 'react'
import "./Footer.css"
import png1 from '../../assets/Img/1.png'
import { MdLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt,FaTelegram ,FaInstagram} from "react-icons/fa";
import { footer_data } from '../Static/static';
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";



function Footer() {

    let footer_link = footer_data?.map((el) => (
        <div className='two_text_content' key={el.id}>
            <h1 className=''> {el.title} </h1>
            <ul>
                {el.items?.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </div>
    ))


    return (
        <>
            <footer>
                <div className='container'>
                    <div className='big_flex_element'>
                        <div className='one_wraper_text_content'>
                            <div className='logo'>
                                <img src={png1} alt="" />
                                <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                            </div>
                            <div className='addres_container'>
                                <div className='location'>
                                    <MdLocationOn className='metka' />
                                    <p>51 Green St.Huntington ohaio beach ontario, NY
                                        11746 KY 4783, USA.</p>
                                </div>
                                <div className='email'>
                                    <MdOutlineMailOutline className='gmail' />
                                    <p>example@email.com</p>
                                </div>
                                <div className='phone'>
                                    <FaPhoneAlt className='number' />
                                    <p>+998 94 620 26 61 </p>
                                </div>
                            </div>
                        </div>
                        <div className='two_wrapper_text_continer'>
                            {
                                footer_link
                            }
                        </div>
                        <div className='there_wrapper_text_content'>
                            <h1>Subscribe Our Newsletter</h1>
                            <form className='footer_form'>
                                <input type="text" placeholder='Search here...' />
                            </form>

                            <div className='footer_icon_container'>
                                <div className='faccebook'>
                                    <CiFacebook />
                                </div>
                                <div className='faccebook'>
                                <BsTwitterX />
                                </div>
                                <div className='faccebook'>
                                <FaTelegram />
                                </div>
                                <div className='faccebook'>
                                <FaInstagram />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;