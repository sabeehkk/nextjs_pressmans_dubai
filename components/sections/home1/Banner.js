
'use client';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

// Define your font family - replace with actual font from the image
const brandFont = "Montserrat', sans-serif" // Example font

export default function Banner() {
    return (
        <>
        <style jsx global>{`
            /* Force override font family for banner headings */
            .banner-section .main-slider-carousel .slide .inner-column h1,
            .banner-section .main-slider-carousel .slide .inner-column h1 span {
                font-family: ${brandFont} !important;
            }
            
            .banner-section .main-slider-carousel .slide .inner-column .text {
                font-family: ${brandFont} !important;
            }
        `}</style>
        
        {/* Banner Section */}
        <section className="banner-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }}></div>
            <Swiper {...swiperOptions} className="main-slider-carousel">
                
                {/* Slide 1 */}
               side1&2  

 {/* Slide 1 */}
                 <SwiperSlide>
                <div className="slide">
                    <div className="icon-layer-one " style={{ backgroundImage: 'url(assets/images/removed_banner_bg/mulbberiesremovedbg.png)' }}></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/removed_banner_bg/cherryremovedbg.png)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1 
                                        className="flex flex-wrap items-center font-bold tracking-tight leading-[1.1]"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       
                                    <span 
                                        className="first-letter text-5xl lg:text-6xl text-[#582414] mr-2"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       People who love
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#582414] mr-2 font-bold"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       to eat are always
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#582414] font-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       the best people
                                    </span>
                                    </h1>
                                    <div 
                                        className="text mt-4 text-lg tracking-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </div>
                                    <div className="btns-box mt-6">
                                        <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }}></div> */}
                                    <div className="image" style={{width:'914px',marginTop:'-213px',marginLeft:'-9rem'}}>
                                        <img src="assets/images/removed_banner_bg/beattheheatcopy.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                {/* Slide 2 */}
                 {/* Slide 3 */}
                <SwiperSlide>
                <div className="slide style-two">
                    <div className="icon-layer-one " style={{ backgroundImage: 'url(assets/images/removed_banner_bg/onion_removedbg.png)' }}></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/removed_banner_bg/cheeseremovedbg.png)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1 
                                        className="flex flex-wrap items-center font-bold tracking-tight leading-[1.1]"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        
                                    <span 
                                        className="first-letter text-5xl lg:text-6xl text-[#ffffff] mr-2"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        Extremes are
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#ffffff] mr-2 font-bold"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                      the EASY,
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#ffffff] font-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       Strive for BALANCE
                                    </span>
                                    </h1>
                                    <div 
                                        className="text mt-4 text-lg tracking-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </div>
                                    <div className="btns-box mt-6">
                                        <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }}></div> */}
                                    <div className="image">
                                        <img src="assets/images/removed_banner_bg/sandwich.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide 2 */}
                 {/* Slide 3 */}
                <SwiperSlide>
                <div className="slide style-three">
                    <div className="icon-layer-one " style={{ backgroundImage: 'url(assets/images/removed_banner_bg/chilly_removedbg.png)' }}></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/removed_banner_bg/tomato_removed_bg.png)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1 
                                        className="flex flex-wrap items-center font-bold tracking-tight leading-[1.1]"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        
                                    <span 
                                        className="first-letter text-5xl lg:text-6xl text-[#ffffff] mr-2"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        Extremes are
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#ffffff] mr-2 font-bold"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                      the EASY,
                                    </span>

                                    <span 
                                        className="second-letter text-5xl lg:text-6xl text-[#ffffff] font-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                       Strive for BALANCE
                                    </span>
                                    </h1>
                                    <div 
                                        className="text mt-4 text-lg tracking-normal"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </div>
                                    <div className="btns-box mt-6">
                                        <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }}></div> */}
                                    <div className="image " style={{width:'490px',marginTop:'-15rem',height:'522px'}}>
                                        <img src="assets/images/removed_banner_bg/CheeseChilliCornWrap-Social2copy.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                

               
            </Swiper>
        </section>
        </>
    )
}