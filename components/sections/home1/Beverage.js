'use client'
import Link from "next/link"
export default function Beverage() {
    return (
        <>

            {/* Beverage Section */}
            <section className="beverage-section">
                {/* <div className="icon-layer" style={{ backgroundImage: 'url(assets/slider/bannerimg.jpg)' }} ></div> */}
               <div 
  className="icon-layer" 
  style={{ 
    backgroundImage: 'url(assets/slider/bannerimg.jpg)',
    backgroundSize: 'cover', // or 'contain' depending on your needs
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }} 
></div>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title !text-[#582414]">Best for You</div>
                        <h2 className="!text-[#582414]">Best Delivered Categories</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="assets/slider/beverages.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Beverages</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="/assets/slider/Sandwich-Wraps-Combos.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Sandwiches & Wraps</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="/assets/slider/Freshly-Made-Salads.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Salads</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="/assets/slider/Pressed-Platters.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Platters</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="/assets/slider/Party-Packs.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Party Packs</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="/assets/slider/side-orders.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Side Orders</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="assets/slider/Sandwich-Wraps-Combos.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Sandwich & Wraps Combos</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Beverage Column */}
                        <div className="beverage-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <Link href="/"><img src="assets/slider/pressed-sandwich.webp" alt="" /></Link>
                                </div>
                                <div className="lower-content">
                                    <h6><Link href="/">Pressed Sandwiches & Wraps</Link></h6>
                                    <div className="products">View All</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* Button Box */}
                    <div className="button-box text-center">
                        <Link href="/" className="theme-btn btn-style-two clearfix"><span className="icon"></span>View All Products</Link>
                    </div>
                    
                </div>
            </section>
            {/* End Beverage Section */}

        </>
    )
}
