
// 'use client'
// import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     slidesPerView: 1,
//     spaceBetween: 0,
//     // autoplay: {
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     // },
//     loop: true,

//     // Navigation
//     navigation: {
//         nextEl: '.h1n',
//         prevEl: '.h1p',
//     },

//     // Pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// }

// export default function Banner() {
//     return (
//         <>

//         {/* Banner Section */}
//         <section className="banner-section bg-amber-500">
//             <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }} ></div>
//             <Swiper {...swiperOptions} className="main-slider-carousel ">
                
//                 {/* Slide */}
//                 <SwiperSlide>
//                 <div className="slide">
//                     {/* <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div> */}
//                     {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-2.png)' }} ></div> */}
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     {/* <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1> */}
//                                     <h1 className="flex flex-wrap items-center leading-tight">
//                                 <span className="first-letter text-6xl text-[#582414] mr-2">
//                                     You don’t have to
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414] mr-2">
//                                     Eat Less,
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414]">
//                                     You just need to Eat Right
//                                 </span>
//                                 </h1>
//                                     <div className="text !text-amber-700">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
//                                     <div className="btns-box">
//                                         <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
//                                     </div>
//                                     <div className="icons-box">
//                                         <img src="assets/images/main-slider/icons.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             {/* Image Column */}
//                             <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     {/* <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div> */}
//                                     <div className="image">
//                                         <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>

//                 {/* Slide */}
//                 <SwiperSlide>
//                 <div className="slide">
//                     <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
//                     <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-6.png)' }} ></div>
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1>
//                                     <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
//                                     <div className="btns-box">
//                                         <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
//                                     </div>
//                                     <div className="icons-box">
//                                         <img src="assets/images/main-slider/icons.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             {/* Image Column */}
//                             <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
//                                     <div className="image">
//                                         <img src="assets/images/main-slider/content-image-2.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>
//                 {/* Slide */}
//                 <SwiperSlide>
//                 <div className="slide style-two">
//                     <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
//                     <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }} ></div>
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1>
//                                     <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
//                                     <div className="btns-box">
//                                         <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
//                                     </div>
//                                     <div className="icons-box">
//                                         <img src="assets/images/main-slider/icons.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                             {/* Image Column */}
//                             <div className="image-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
//                                     <div className="image">
//                                         <img src="assets/images/main-slider/content-image-3.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>
//             </Swiper>
//         </section>
//         {/* End Banner Section */}
//         </>
//     )
// }
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // Autoplay configuration
    autoplay: {
        delay: 6000, // 4 seconds = 4000ms
        disableOnInteraction: false, // Keep autoplay running after user interaction
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
        {/* Banner Section */}
        <section className="banner-section bg-amber-500">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel ">
                
                {/* Slide */}
                <SwiperSlide>
                <div className="slide">
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1 className="flex flex-wrap items-center leading-tight">
                                <span className="first-letter text-6xl text-[#582414] mr-2">
                                    You don’t have to
                                </span>

                                <span className="second-letter text-6xl text-[#582414] mr-2">
                                    Eat Less,
                                </span>

                                <span className="second-letter text-6xl text-[#582414]">
                                    You just need to Eat Right
                                </span>
                                </h1>
                                    <div className="text !text-amber-700">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
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
                                    <div className="image">
                                        <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                {/* Slide */}
                <SwiperSlide>
                <div className="slide">
                    {/* <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div> */}
                    {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-6.png)' }} ></div> */}
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* Extremes are the EASY, Strive for BALANCE
                                    <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1> */}
                                     <h1 className="flex flex-wrap items-center leading-tight">
                                <span className="first-letter text-6xl text-[#582414] mr-2">
                                    Extremes are the
                                </span>

                                <span className="second-letter text-6xl text-[#582414] mr-2">
                                    EASY, Strive 
                                </span>

                                <span className="second-letter text-6xl text-[#582414]">
                                   for BALANCE
                                </span>
                                </h1>
                                    
                                    <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
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
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide */}
                <SwiperSlide>
                <div className="slide style-two">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    {/* <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1> */}
                                         <h1 className="flex flex-wrap items-center leading-tight">
                                <span className="first-letter text-6xl text-[#582414] mr-2">
                                    You don’t have to cook
                                </span>

                                <span className="second-letter text-6xl text-[#582414] mr-2">
                                   Fancy or
                                </span>

                                <span className="second-letter text-6xl text-[#582414]">
                                    Complicated Masterpieces - 
                                </span>
                                </h1>
                                    <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
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
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            
        </section>
        {/* End Banner Section */}
            
        </>
    )
}