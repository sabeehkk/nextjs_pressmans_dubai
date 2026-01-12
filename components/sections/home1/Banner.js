
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

// 'use client'
// import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     slidesPerView: 1,
//     spaceBetween: 0,
//     // Autoplay configuration
//     autoplay: {
//         delay: 6000, // 4 seconds = 4000ms
//         disableOnInteraction: false, // Keep autoplay running after user interaction
//     },
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
//         <section className="banner-section  ">
//             <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }} ></div>
//             <Swiper {...swiperOptions} className="main-slider-carousel ">
                
//                 {/* Slide */}
//                 <SwiperSlide>
//                 <div className="slide ">
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12 ">
//                                 <div className="inner-column">
//                                 <h1 className="flex flex-wrap items-center leading-tight">
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
//                     {/* <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div> */}
//                     {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-6.png)' }} ></div> */}
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     {/* Extremes are the EASY, Strive for BALANCE
//                                     <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1> */}
//                                      <h1 className="flex flex-wrap items-center leading-tight">
//                                 <span className="first-letter text-6xl text-[#582414] mr-2">
//                                     Extremes are the
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414] mr-2">
//                                     EASY, Strive 
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414]">
//                                    for BALANCE
//                                 </span>
//                                 </h1>
                                    
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
//                 <div className="slide style-two">
//                     <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
//                     <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }} ></div>
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     {/* <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1> */}
//                                          <h1 className="flex flex-wrap items-center leading-tight">
//                                 <span className="first-letter text-6xl text-[#582414] mr-2">
//                                     You don’t have to cook
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414] mr-2">
//                                    Fancy or
//                                 </span>

//                                 <span className="second-letter text-6xl text-[#582414]">
//                                     Complicated Masterpieces - 
//                                 </span>
//                                 </h1>
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
//                                         <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
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
//       </>
//     )
// }


// 'use client'
// import Link from "next/link"
// import { Autoplay, Navigation, Pagination } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoplay: {
//         delay: 6000,
//         disableOnInteraction: false,
//     },
//     loop: true,
//     navigation: {
//         nextEl: '.h1n',
//         prevEl: '.h1p',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// }

// // Define your font family - replace with actual font from the image
// const brandFont = "'Montserrat', sans-serif" // Example font

// export default function Banner() {
//     return (
//         <>
//         <style jsx global>{`
//             /* Force override font family for banner headings */
//             .banner-section .main-slider-carousel .slide .inner-column h1,
//             .banner-section .main-slider-carousel .slide .inner-column h1 span {
//                 font-family: ${brandFont} !important;
//             }
            
//             .banner-section .main-slider-carousel .slide .inner-column .text {
//                 font-family: ${brandFont} !important;
//             }
//         `}</style>
        
//         {/* Banner Section */}
//         <section className="banner-section">
//             <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }}></div>
//             <Swiper {...swiperOptions} className="main-slider-carousel">
                
//                 {/* Slide 1 */}
//                 <SwiperSlide>
//                 <div className="slide">
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                 <h1 
//                                     className="flex flex-wrap items-center font-bold tracking-tight leading-[1.1]"
//                                     style={{ fontFamily: `${brandFont} !important` }}
//                                 >
//                                 <span 
//                                     className="first-letter text-5xl lg:text-6xl text-[#582414] mr-2"
//                                     style={{ fontFamily: `${brandFont} !important` }}
//                                 >
//                                     You don't have to
//                                 </span>

//                                 <span 
//                                     className="second-letter text-5xl lg:text-6xl text-[#582414] mr-2 font-bold"
//                                     style={{ fontFamily: `${brandFont} !important` }}
//                                 >
//                                     Eat Less,
//                                 </span>

//                                 <span 
//                                     className="second-letter text-5xl lg:text-6xl text-[#582414] font-normal"
//                                     style={{ fontFamily: `${brandFont} !important` }}
//                                 >
//                                     You just need to Eat Right
//                                 </span>
//                                 </h1>
//                                     <div 
//                                         className="text !text-amber-700 mt-4 text-lg tracking-normal"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                         Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
//                                     </div>
//                                     <div className="btns-box mt-6">
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
//                                     <div className="image">
//                                         <img src="assets/slider/beverages_banner-removebg-preview.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>

//                 {/* Slide 2 */}
//                 <SwiperSlide>
//                 <div className="slide">
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                      <h1 
//                                         className="flex flex-wrap items-center font-bold  leading-[1.1]"
//                                     >
//                                     <span 
//                                         className="first-letter text-5xl lg:text-6xl text-[#582414] mr-2"
//                                     >
//                                         Extremes are the
//                                     </span>

//                                     <span 
//                                         className="second-letter text-5xl lg:text-6xl text-[#582414] mr-2 font-bold"
//                                     >
//                                         EASY, Strive 
//                                     </span>

//                                     <span 
//                                         className="second-letter text-5xl lg:text-6xl text-[#582414] font-normal"
//                                     >
//                                        for BALANCE
//                                     </span>
//                                     </h1>
                                    
//                                     <div 
//                                         className="text mt-4 text-lg tracking-normal"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                         Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
//                                     </div>
//                                     <div className="btns-box mt-6">
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
//                                     <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }}></div>
//                                     <div className="image">
//                                         <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>

//                 {/* Slide 3 */}
//                 <SwiperSlide>
//                 <div className="slide style-two">
//                     <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }}></div>
//                     <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }}></div>
//                     <div className="auto-container">
//                         <div className="row clearfix">
                        
//                             {/* Content Column */}
//                             <div className="content-column col-lg-6 col-md-12 col-sm-12">
//                                 <div className="inner-column">
//                                     <h1 
//                                         className="flex flex-wrap items-center font-bold tracking-tight leading-[1.1]"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                     <span 
//                                         className="first-letter text-5xl lg:text-6xl text-[#582414] mr-2"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                         You don't have to cook
//                                     </span>

//                                     <span 
//                                         className="second-letter text-5xl lg:text-6xl text-[#582414] mr-2 font-bold"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                        Fancy or
//                                     </span>

//                                     <span 
//                                         className="second-letter text-5xl lg:text-6xl text-[#582414] font-normal"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                         Complicated Masterpieces -
//                                     </span>
//                                     </h1>
//                                     <div 
//                                         className="text mt-4 text-lg tracking-normal"
//                                         style={{ fontFamily: `${brandFont} !important` }}
//                                     >
//                                         Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
//                                     </div>
//                                     <div className="btns-box mt-6">
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
//                                     <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }}></div>
//                                     <div className="image">
//                                         <img src="https://mcdindia.com/wp-content/uploads/2023/01/veg-surprise-burger-1.png" alt="" />
//                                     </div>
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//                 </SwiperSlide>
//             </Swiper>
//         </section>
//         </>
//     )
// }

'use client'

import { useState } from 'react'
import { ChevronRight, UtensilsCrossed, Leaf, Sandwich } from 'lucide-react'

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "You don't have to cook Fancy or Complicated Masterpieces -",
      subtitle: "Just Good Food From Fresh Ingredients",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "You don't have to Eat Less, You just need to Eat Right",
      subtitle: "Healthy & Delicious Meals Made Simple",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Extremes are the EASY, Strive for BALANCE",
      subtitle: "Balanced Nutrition in Every Bite",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Hot",
      description: "Food prepared and served to order"
    },
    {
      icon: Leaf,
      title: "Fresh",
      description: "Breads baked in-house daily and ingredients without added preservatives"
    },
    {
      icon: Sandwich,
      title: "Pressed",
      description: "Sandwiches, Wraps, Platters, Desserts & More"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen bg-[#f5ebe0] overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">

          {/* Left Content Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#5c2e1a] leading-tight">
              <span className="font-serif">{slides[currentSlide].title}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-[#7d4e2d] font-medium">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <div>
              <button className="group bg-[#5c2e1a] hover:bg-[#7d4e2d] text-[#f4c430] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Order Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-[#5c2e1a]'
                      : 'w-3 bg-[#d4a574]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Center Image Column */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Circular Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-200/60 rounded-full shadow-2xl overflow-hidden backdrop-blur-sm">
                <img
                  src={slides[currentSlide].image}
                  alt="Delicious food"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features Column */}
          <div className="lg:col-span-3 space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#f5ebe0] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#5c2e1a]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#5c2e1a] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#7d4e2d] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
