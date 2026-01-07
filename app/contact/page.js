
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
    <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Contact">
        {/* Contact Page Section */}
        <section className="contact-page-section">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">Get in touch</div>
                    <h2>Hi <span className="theme_color">Say</span></h2>
                    <div className="separate"></div>
                    <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas <br/> accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint <br/> atqui voluptatibus an, pro ne malis semper perpetua.</div>
                </div>
                <div className="row clearfix">
                
                    {/* Form Column */}
                    <div className="form-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="title-box">
                                <h4>Drop us a line</h4>
                                <div className="text">Your email address will not be published. Required fields are marked *</div>
                            </div>
                            
                            {/* Contact Form */}
                            <div className="contact-form">
                                <form method="post"  id="contact-form">
                                    <div className="row clearfix">
                                    
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="Your Comment"></textarea>
                                        </div>
                                    
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="text" name="username" placeholder="Your Name"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                            <input type="email" name="email" placeholder="Your Email"/>
                                        </div>
                                        
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="submit" className="theme-btn btn-style-four clearfix"><span className="icon flaticon-arrow-pointing-to-right"></span>Send</button>
                                        </div>
                                        
                                    </div>
                                </form>
                                {/* Contact Form */}
                            </div>
                            
                        </div>
                    </div>
                    
                    {/* Info Column */}
                    <div className="info-column col-lg-4 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <ul className="info-list">
                                <li>
                                    <strong>Berlin</strong>
                                    52 Corso Magenta <br/>20123 Milano, Italy <br/> +123 -45678-900 <br/>yourspa@info.com
                                </li>
                                <li>
                                    <strong>Opening Hours</strong>
                                    Monday – Friday 09:00 – 23:00 <br/> Saturday 09:00 – 22:00
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Contact Page Section */}
        
        {/* Map Section */}
        <section className="contact-map-section">
            <div className="auto-container">
                {/* Map Boxed */}
                <div className="map-boxed">
                    {/*Map Outer*/}
                    <div className="map-outer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"></iframe>
                    </div>
                </div>
            </div>
        </section>
        {/* End Map Section */}
        
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