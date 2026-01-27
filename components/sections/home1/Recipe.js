// 'use client'
// import Link from "next/link"
// export default function Recipe() {
//     return (
//         <>

//         {/* Recipe Section */}
//           <section
//                 className="recipe-section"
//                 style={{
//                     backgroundImage: "url('https://pressmans.com/wp-content/uploads/2023/06/feedback-bg.jpg')",
//                 }}
//                 >
//             {/* <div className="section-text">yummy</div> */}
//             <div className="icon-layer-one" style={{ backgroundImage:'url(assets/images/icons/icon-1.png)'}} ></div>
//             <div className="icon-layer-two" style={{ backgroundImage:'url(assets/images/icons/icon-2.png)'}} ></div>
//             <div className="icon-layer-three" style={{ backgroundImage:'url(assets/images/icons/icon-3.png)'}} ></div>
//             <div className="auto-container">
//                 {/* Sec Title */}
//                 <div className="sec-title centered">
//                     <div className="title">Best for You</div>
//                     <h2 className="text-white">Find us on your favorite food delivery apps and order ahead to skip the rush</h2>
//                     <div className="separate"></div>
//                 </div>
//                 <div className="inner-container">
//                     <div className="circle-layer" style={{ backgroundImage:'url(assets/images/icons/circles.png)'}} ></div>
//                     <div className="row clearfix">
                    
//                         {/* Left Column */}
//                         <div className="left-column col-lg-5 col-md-6 col-sm-12">
//                             <div className="inner-column">
                            
//                                 {/* Recipe Block */}
//                                 <div className="recipe-block">
//                                     <div className="inner-box">
//                                   <div className="icon rounded-full overflow-hidden w-20 h-20 flex items-center justify-center bg-white">
//                                         <img
//                                             src="https://pressmans.com/wp-content/uploads/2023/06/logo2.png"
//                                             alt=""
//                                             className="w-full h-full object-contain rounded-full"
//                                         />
//                                         </div>
                                
//                                     </div>
//                                 </div>
                                
//                                 {/* Recipe Block */}
//                                 <div className="recipe-block">
//                                     <div className="inner-box">
//                                <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white">
//                                     <img
//                                         src="https://pressmans.com/wp-content/uploads/elementor/thumbs/logo1-q80mng6y2o1rxmsw8anqqga4k45ak87nnbeb1y10si.png"
//                                         alt=""
//                                         className="w-full h-full object-contain rounded-full"
//                                     />
//                                     </div>
                                      
//                                     </div>
//                                 </div>
                                
//                                 <div className="recipe-block">
//                                     <div className="inner-box">
//                                                         <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white">
//                                             <img
//                                                 src="https://pressmans.com/wp-content/uploads/2023/06/logo3.png"
//                                                 alt=""
//                                                 className="w-full h-full object-contain rounded-full"
//                                             />
//                                             </div>
                                       
//                                     </div>
//                                 </div>
                                
//                             </div>
//                         </div>
//                          <div className="btns-box">
//                                         <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
//                                     </div>
                      
                        
//                         {/* Right Column */}
//                         <div className="right-column col-lg-5 col-md-6 col-sm-12">
//                             <div className="inner-column">
                            
                    
//                                 <div className="recipe-block style-two">
//                                     <div className="inner-box ">
//                                         <div className="icon  bg-white"><img src="assets/slider/deliveroo.webp" alt=""/></div>
                                       
//                                     </div>
//                                 </div>
                                
//                                 {/* Recipe Block / Style Two */}
//                                 <div className="recipe-block style-two">

//                                     <div className="inner-box">
//                                         <div className="icon bg-white"><img src="assets/slider/googlelogo.webp" alt=""/></div>
                                      
//                                     </div>
//                                 </div>

//                                 <div className="recipe-block style-two">

//                                     <div className="inner-box">
//                                         <div className="icon bg-white"><img src="assets/slider/zomatologo.webp" alt=""/></div>
                                      
//                                     </div>
//                                 </div>
                              

//                             </div>

                          
//                         </div>
//                             <div className="recipe-block style-two">

//                                     <div className="inner-box">
//                                         <div className="icon bg-white"><img src="assets/slider/theentertainer.webp" alt=""/></div>
                                       
//                                     </div>
//                                 </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </section>
//         {/* End Recipe Section */}
            

//         </>
//     )
// }
'use client'
import Link from "next/link"

export default function Recipe() {
    return (
        <>
            {/* Recipe Section */}
            <section
                className="recipe-section"
                style={{
                    backgroundImage: "url('assets/slider/about-bg-gray.webp')",
                }}
            >
                {/* <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }}></div> */}
                {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }}></div> */}
                <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }}></div>
                
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <h1 className="title !text-[#582414]">Best for You</h1>
                        {/* <h2 className="text-white">Find us on your favorite food delivery apps and order ahead to skip the rush</h2> */}
                      <h2>
                        <span style={{ color: "#582414" }}>Find us on your favorite </span>
                        <span style={{ color: "#F5E400" }}>food delivery apps</span>
                        <span style={{ color: "#582414" }}>
                            {" "}and order ahead to skip the 
                        </span>
                        <span style={{ color: "#F5E400" }}>
                            {" "}rush
                        </span>
                        </h2>
                      
                        <div className="separate"></div>
                    </div>
                    
                    <div className="inner-container">
                        <div className="circle-layer !mt-[-94px]" style={{ backgroundImage: 'url(assets/images/icons/circles.png)' }}></div>
                        
                        {/* Grid Container for all icons */}
                        <div className="flex flex-col items-center justify-center">
                            {/* First Row: 4 Icons */}
                            <div className="flex flex-wrap justify-center gap-8 mb-8">
                                {/* Icon 1 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img
                                                src="https://pressmans.com/wp-content/uploads/2023/06/logo2.png"
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon 2 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img
                                                src="https://pressmans.com/wp-content/uploads/elementor/thumbs/logo1-q80mng6y2o1rxmsw8anqqga4k45ak87nnbeb1y10si.png"
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon 3 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img
                                                src="https://pressmans.com/wp-content/uploads/2023/06/logo3.png"
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon 4 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img 
                                                src="assets/slider/deliveroo.webp" 
                                                alt="Deliveroo"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Second Row: 3 Icons (including Buy Now button in circle) */}
                            <div className="flex flex-wrap justify-center gap-8">
                                {/* Icon 5 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img 
                                                src="assets/slider/googlelogo.webp" 
                                                alt="Google"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon 6 */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                            <img 
                                                src="assets/slider/zomatologo.webp" 
                                                alt="Zomato"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Icon 7: Buy Now Button inside Circle */}
                                <div className="recipe-block">
                                    <div className="inner-box flex justify-center">
                                        {/* <Link 
                                            href="menu" 
                                            className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="text-center font-semibold text-gray-800">
                                                Buy Now
                                            </span>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Alternative: If you want The Entertainer as the 7th icon instead of Buy Now button */}
                        {/* 
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="recipe-block">
                                <div className="inner-box flex justify-center">
                                    <div className="icon rounded-full overflow-hidden w-24 h-24 flex items-center justify-center bg-white p-4">
                                        <img 
                                            src="assets/slider/theentertainer.webp" 
                                            alt="The Entertainer"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </section>
            {/* End Recipe Section */}
        </>
    )
}