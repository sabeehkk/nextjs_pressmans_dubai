'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'



const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}




export default function About() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us" heading="Best Delivered Categories">
        {/* History Section */}
        <section className="history-section-two">
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image ">
                                <img src="assets/images/20th_century/20thcenturykids.jpg" alt="" />
                            </div>
                            {/* <div className="image-two">
                                <img src="assets/images/20th_century/20thcenturykids.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title !text-[#582414]" >PRESSMAN’S TALE</div>
                                {/* <h2>Founded in 1970 by <span className="!text-[rgb(245, 228, 0)]">Chairman Jay Martin</span></h2> */}
                          <h2 className="!text-[#582414]">
                            Dedication To This Historic{" "}
                            <span className="!text-[#582414]">
                               Era Of Early 20th Century
                            </span>
                            </h2>
                                <div className="text">Pressman’s is a dedication to this historic era of early 20th century when sandwiches were first introduced to America. Very soon it captured the diet penchant of the country and became the way of life for Americans… During that period in the midst of all the difficulties, people would have a reason to rejoice and forget the difficulties of life over a Sandwich… Simply stuffed with meat, cheese, fresh ingredients and wrapped in newspaper, the sandwich became a daily reason for people to interact with each other and detach themselves from their routine tensions of life… </div>
                            </div>
                            {/* <ul className="list-style-two">
                                <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                                <li>Vivamus elementum lorem vitae quam tincidunt</li>
                                <li>Suspendisse accumsan eros eu erat condimentum</li>
                            </ul> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End History Section */}
          {/* Staff Section */}
        <section className="staff-section" style={{ backgroundImage: 'url(assets/slider/about-bg-gray.webp)' }}>
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title !text-[#582414]">Our Team</div>
                    <h2 className="!text-[#582414]">Meet Our Founders</h2>
                </div>
                <div className="row clearfix">
                
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/brand_owners/amit_gandhi_founder.webp" alt="" /></Link>
                                <div className="overlay-box">
                                    <div className="content">
                                      <h6><Link href="#">Amit Gandhi</Link></h6>
                                        <div className="designation">Co-Founder</div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <Link href="#"><img src="assets/images/brand_owners/ravani_sawanfounder.webp" alt="" /></Link>

                                <div className="overlay-box">
                                    <div className="content">
                                        <h6><Link href="#">Sawan Ravani</Link></h6>
                                        <div className="designation">Co-Founder</div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Staff Block */}
                    <div className="staff-block col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                {/* <Link href="#"><img src="assets/images/resource/staff-3.jpg" alt="" /></Link> */}
                                <Link href="#"><img src="assets/images/brand_owners/neelesh_bhatnagar_founder.webp" alt="" /></Link>
                                <div className="overlay-box">
                                    <div className="content">
                                        <h6><Link href="#">Neelesh Bhatnagar</Link></h6>
                                        <div className="designation">Partner</div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-facebook-square"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter-square"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <p className="!pl-8 !pr-8 !pt-4">
                    Pressman’s is co-founded by two friends and business partners Sawan Ravani and Amit Gandhi. The duo has built their decade long entrepreneurial portfolio on strong foundation of educational expertise. While Amit Gandhi is a Certified Chartered Accountant with more than 10 years of experience in Retail industry in Europe and GCC, Sawan Ravani holds a Masters Degree in Law from the UK and has successfully built a business portfolio that include Retail & Distribution, Real Estate and Trading spread across GCC, Africa and Asia.
                </p>
                <p className="!pl-8 !pr-8">
                    The duo has aggressive expansion plans to tap the ever growing QSR market across the globe. The founders strongly believe that although the region’s F&B market is flooded with options, quality and simplicity is rarely visible. It is with this conviction that Pressman’s is conceptualized and developed.
                </p>
                <p className="!pl-8 !pr-8">
                   Hence it was only apt that a solid entrepreneur, visionary and astute venture capitalist like Neelesh Bhatnagar came onboard Pressman’s in 2017. With more than 20 years of retail, investment and operational experience in GCC region, Neelesh brings in vast pool of expertise and resources vital for Pressman’s growth in the region and beyond. Since the three partners have been jointly involved in various other activities over the years, the synergy and mutual conviction for Pressman’s future growth and expansion is undoubtedly clear and comprehensive.
                </p>
            </div>
        </section>
        {/* End Staff Section */}
        
        {/* Gallery Section Two */}
        <section className="gallery-section-two">
                <div className="outer-container">
                    <div className="masonry-items-container row clearfix">
                    
                        {/* Gallery Block Two */}
                        <div className="gallery-block-two masonry-item col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <img src="assets/images/gallery/19.jpg" alt="" />
                                    <div className="overlay-box">
                                        <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                        <div className="title">Us percipit urbanitas referrentur ea.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Gallery Block Two */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="row">
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/20.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/23.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Block Two */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row">
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/21.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/22.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Block Two */}
                                <div className="gallery-block-two masonry-item col-lg-12 col-md-12 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img src="assets/images/gallery/24.jpg" alt="" />
                                            <div className="overlay-box">
                                                <h6><Link href="gallery">Cornish cod fillet</Link></h6>
                                                <div className="title">Us percipit urbanitas referrentur ea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </section>
        {/* End Gallery Section Two */}
        
      
        
        {/* Testimonial Section */}
        <section className="testimonial-section">
            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
            <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
            <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-4.png)' }} ></div>
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Testimonial</div>
                    <h2>What People Say</h2>
                    <div className="separate"></div>
                </div>
                <div className="inner-container">
                    <Swiper {...swiperOptions} className="single-item-carousel ">
                    
                        {/* Testimonial Block */}
                        <SwiperSlide>
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="author-image">
                                    <img src="assets/images/resource/author-1.jpg" alt="" />
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        
                        {/* Testimonial Block */}
                        <SwiperSlide>
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="author-image">
                                    <img src="assets/images/resource/author-1.jpg" alt="" />
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        
                        {/* Testimonial Block */}
                        <SwiperSlide>
                        <div className="testimonial-block">
                            <div className="inner-box">
                                <div className="author-image">
                                    <img src="assets/images/resource/author-1.jpg" alt="" />
                                </div>
                                <div className="text">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br/> ullamco.”</div>
                                <div className="designation">Meredith Grant <span>- Host Mother</span></div>
                            </div>
                        </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
        </section>
        {/* End Testimonial Section */}
        
        {/* Gallery Section */}
        <section className="gallery-section">
            <div className="outer-container">
                <GallerySlider1/>
            </div>
        </section>
        {/* End Gallery Section */}

            </Layout>
        </>
    )
}


