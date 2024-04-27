import React from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import iphone from '../../assets/Img/toppng.com-apple-iphone-15-pro-max-blue-titanium-edition-hd-png-1600x1600.png'
import iphone2 from '../../assets/Img/toppng.com-hd-png-of-apple-iphone-15-pro-max-in-natural-titanium-1600x1600.png'
import iphone3 from '../../assets/Img/toppng.com-hd-apple-iphone-15-plus-pink-back-and-side-view-png-1600x1600.png'
import iphone4 from '../../assets/Img/toppng.com-black-titanium-hd-png-apple-iphone-15-pro-max-1600x1600.png'
import iphone5 from '../../assets/Img/toppng.com-apple-iphone-15-pro-max-in-white-titanium-high-resolution-png-1600x1600.png'



const Banner = () => {
    return (
        <>
            <div className='warpper_swiper '>
                <Swiper loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]} className="mySwiper swiper_baner">
                    <SwiperSlide className='bg_color_one'>
                        <div className='container  banner_text_content'>
                            <div>
                                <h2>Stay home & get your daily
                                    needs from our shop</h2>
                                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                                <form className='banner_form'>
                                    <input type="text" placeholder='Your emaill address' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <img className='img_iphone' src={iphone} alt="" />

                        </div>
                    </SwiperSlide>


                    <SwiperSlide className='bg_color_two'>
                        <div className='container  banner_text_content'>
                            <div>
                                <h2>Stay home & get your daily
                                    needs from our shop</h2>
                                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                                <form className='banner_form'>
                                    <input type="text" placeholder='Your emaill address' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <img className='img_iphone' src={iphone2} alt="" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg_color_there'>
                        <div className='container  banner_text_content'>
                            <div>
                                <h2>Stay home & get your daily
                                    needs from our shop</h2>
                                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                                <form className='banner_form'>
                                    <input type="text" placeholder='Your emaill address' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <img className='img_iphone' src={iphone3} alt="" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg_color_four'>
                        <div className='container  banner_text_content'>
                            <div>
                                <h2>Stay home & get your daily
                                    needs from our shop</h2>
                                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                                <form className='banner_form'>
                                    <input type="text" placeholder='Your emaill address' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <img className='img_iphone' src={iphone4} alt="" />

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg_color_five'>
                        <div className='container  banner_text_content'>
                            <div>
                                <h2>Stay home & get your daily
                                    needs from our shop</h2>
                                <p>Start You'r Daily Shopping with <span>Nest Mart</span></p>
                                <form className='banner_form'>
                                    <input type="text" placeholder='Your emaill address' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                            <img className='img_iphone' src={iphone5} alt="" />

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner