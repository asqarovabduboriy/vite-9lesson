import React from 'react'
import "./Hero.css"
import iphone from '../../assets/Img/toppng.com-apple-iphone-15-pro-max-blue-titanium-edition-hd-png-1600x1600.png'

function Hero() {
    return (
        <>
            <div className='container bg_color_banner_hero'>
                <div className='banner_text_content_one'>
                    <div>
                        <h2>Stay home & get your daily
                            needs from our shop</h2>
                        <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                        <form className='banner_form'>
                            <input type="text" placeholder='Your emaill address' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='img_wrapper_bnaner'>
                        <img src={iphone} alt=""  />
                    </div> 
                </div>
            </div>
        </>
    )

}

export default Hero;