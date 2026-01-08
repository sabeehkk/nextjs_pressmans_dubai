'use client'
import Link from "next/link"
export default function Juice() {
    
    return (
        <>


        {/* Juice Section */}
        <section className="juice-section">
            <div className="section-text">yummy</div>
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/1.png)' }} ></div>
            {/* <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/juice-glass.png)' }} ></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/slider/ladyeatingsand.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title text-orange-900">Drink for Health</div>
                                <h2>Fresh Fruit <span className="theme_color">Juices</span></h2>
                                <div className="separate"></div>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</div>
                            </div>
                            <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Buy Now</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Juice Section */}
        </>
    )
}
