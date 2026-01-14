'use client'
import Link from "next/link"
import { useState } from "react"
import { MessageCircle } from "lucide-react"
import "../home1/pressman.css"

// Define brand font - replace with your actual font from guidelines
const brandFont = "'Roboto Slab', serif" // Change to your actual brand font

export default function Fluid() {
   
    return (
        <>
            <style jsx global>{`
                /* Force override font styles for this section */
                .fluid-section-one .content-column .inner-column .sec-title h5,
                .fluid-section-one .content-column .inner-column .sec-title h2,
                .fluid-section-one .content-column .inner-column .sec-title ul,
                .fluid-section-one .content-column .inner-column .sec-title ul li,
                .fluid-section-one .content-column .inner-column .button-box .theme-btn {
                    font-family: ${brandFont} !important;
                }
            `}</style>

            {/* <section className="fluid-section-one bg-red-500 " style={{ backgroundImage: 'url(assets/slider/about-bg-gray.webp)' }}> */}
             <section
  className="fluid-section-one  min-h-screen"
  style={{
    backgroundImage: "url('https://pressmans.com/wp-content/uploads/2023/06/feedback-bg.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
                <div className="outer-container clearfix" style={{ fontFamily: `${brandFont} !important` }}>
                    
                    <div className="content-column">
                        <div className="inner-column">
                            
                            <div className="sec-title">
                                <h2>
                        <span style={{ color: "white" }}>At Pressman's  </span>
                        </h2>
                        <br/>
                        <h5>
                        <span style={{ color: "#F5E400" }}>IT'S ALL ABOUT <br/> THE BREAD  </span>
                        </h5>
                            
                       
                       
                                {/* <h5 style={{ fontFamily: `${brandFont} !important`, fontWeight: '600 !important', letterSpacing: '1px !important' }}>
                                    At Pressman's  
                                </h5>
                                <h3 style={{ 
                                    fontFamily: `${brandFont} !important`, 
                                    fontWeight: '800 !important',
                                    fontSize: '2.5rem !important',
                                    lineHeight: '1.2 !important',
                                    letterSpacing: '-0.5px !important',
                                    marginBottom: '20px !important'
                                }}>
                                    IT'S ALL ABOUT <br/> THE BREAD  
                                </h3> */}
                                <div className="separate"></div>
                                <ul className="text-white" style={{ fontFamily: `${brandFont} !important`, marginTop: '30px !important' }}>
                                    <li style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '500 !important',
                                        marginBottom: '12px !important',
                                        fontSize: '1.1rem !important'
                                    }}>
                                        We bake our signature breads in-house daily.
                                    </li>
                                    <li style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '500 !important',
                                        marginBottom: '12px !important',
                                        fontSize: '1.1rem !important'
                                    }}>
                                        Our breads are without any added preservatives or artificial conditioners.
                                    </li>
                                    <li style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '500 !important',
                                        marginBottom: '12px !important',
                                        fontSize: '1.1rem !important'
                                    }}>
                                        Our breads DO NOT contain butter, dairy or egg.
                                    </li>
                                    <li style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '500 !important',
                                        marginBottom: '12px !important',
                                        fontSize: '1.1rem !important'
                                    }}>
                                        Our breads come in 4 flavors viz. Multi Cereal, Whole Wheat, Omega and Country White.
                                    </li>
                                    <li style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '500 !important',
                                        marginBottom: '12px !important',
                                        fontSize: '1.1rem !important'
                                    }}>
                                        Our sandwiches are light on stomach and crunchy on the outside.
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="flex gap-4 mt-8" style={{ fontFamily: `${brandFont} !important` }}>
                                <button 
                                    className="!px-8 !py-3 !rounded-3xl !bg-yellow-400 hover:!bg-yellow-500 !text-black !font-bold !text-lg !transition-all !duration-300"
                                    style={{ 
                                        fontFamily: `${brandFont} !important`,
                                        fontWeight: '700 !important'
                                    }}
                                >
                                    Read More
                                </button>
                                
                                <div className="button-box">
                                    {/* <Link 
                                        href="menu" 
                                        className="theme-btn btn-style-two clearfix !px-8 !py-3 !rounded-3xl"
                                        style={{ fontFamily: `${brandFont} !important` }}
                                    >
                                        <span className="icon"></span>All Products
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="image-column">
                        <video 
                            src="https://ik.imagekit.io/1zc1fh32oo/Pressman_s__1__DmJBQXmG3.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664172403349" 
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            style={{
                                marginTop:'90px',
                                width: '100% !important',
                                height: '567px !important',
                                objectFit: 'cover !important',
                                borderRadius: '20px !important',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15) !important',
                                maxWidth: '748px  !important',
                                border: '8px solid white !important'
                            }}
                        />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

// 'use client'
// import Link from "next/link"
// import { useState } from "react"
// import { MessageCircle } from "lucide-react"
// import "../home1/pressman.css"
// export default function Fluid() {
   
//     return (
//         <>
 
//             <section className="fluid-section-one">
//                 <div className="outer-container clearfix">
                    
//                     <div className="content-column">
//                         <div className="inner-column">
                            
//                             <div className="sec-title">
//                                 <h5>At Pressman’s</h5>
//                                 <h2>IT'S ALL ABOUT <br/> THE BREAD</h2>
//                                 <div className="separate"></div>
//                                 <ul>
//                                     <li>We bake our signature breads in-house daily.</li>
//                                     <li>Our breads are without any added preservatives or artificial conditioners.</li>
//                                     <li>Our breads DO NOT contain butter, dairy or egg.</li>
//                                     <li>Our breads come in 4 flavors viz. Multi Cereal, Whole Wheat, Omega and Country White.</li>
//                                     <li>Our sandwiches are light on stomach and crunchy on the outside.</li>
//                                 </ul>
                                
//                                 {/* <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> */}
//                             </div>
//                                <button className="rounded-3xl !bg-yellow-400">Read more </button>
//                             <div className="button-box">
//                                 <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>All Product</Link>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="image-column"  >
//                     <video src="https://ik.imagekit.io/1zc1fh32oo/Pressman_s__1__DmJBQXmG3.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1664172403349" alt=""/>
//                     </div>
                    
//                 </div>
//             </section>
//         </>
//     )
// }
