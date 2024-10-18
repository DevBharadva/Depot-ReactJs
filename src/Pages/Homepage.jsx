import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product_Home from './Product_Home';
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
        <div className='mx-22'> 

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='main_slide'>
                    <SwiperSlide>
                        <div className="slider-text container flex justify-around items-center">
                            <div className='contain'>
                                <h1 className='slider_title'>THINK DIFFERENT. </h1>
                                <p>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                            </div>
                            <div className='text-right'>
                                <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-slide1-img.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slider-text container flex justify-around items-center">
                            <div className='contain'>
                                <h1 className='slider_title'>PREMIUM COMFORT.</h1>
                                <p>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                            </div>
                            <div className='text-right flex slide-img'>
                                <img className='w-55' src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide2-img1.png" alt="" />
                                <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide2-img2.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-text container flex justify-around items-center">
                            <div className='contain'>
                                <h1 className='slider_title'> CONTEMPORARY DESIGN. </h1>
                                <p>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                            </div>
                            <div className='text-right slide-img_2'>
                                <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/h1-slide3-img.jpg" alt="" />

                            </div>
                        </div>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
            <Product_Home/>
        </>
    );
}


