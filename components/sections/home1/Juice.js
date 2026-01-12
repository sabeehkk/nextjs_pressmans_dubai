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
                    {/* <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                       
                            <div className="sec-title">
                                
                                <h2>Hot 
                                    <br/>
                                    <span className="theme_color">Fresh</span></h2>
                                <h2> <span className="theme_color">Pressed</span></h2>

                                <div className="separate"></div>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</div>
                            </div>
                            <Link href="menu" className="theme-btn btn-style-two clearfix"><span className="icon"></span>Buy Now</Link>
                        </div>
                    </div> */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
  <div className="inner-column food-features">

    {/* Feature Item */}
    <div className="feature-item">
      <div className="icon-circle w-12">
        <img src="https://static.thenounproject.com/png/hot-icon-184690-512.png" alt="Hot" />
      </div>
      <div className="feature-content">
        <h4 className="text-[#441b10]">Hot</h4>
        <p className="text-[#441b10]">Food prepared and served to order</p>
      </div>
    </div>

    {/* Feature Item */}
    <div className="feature-item">
      <div className="icon-circle w-12">
        <img src="https://static.thenounproject.com/png/hot-icon-184690-512.png" alt="Fresh" />
      </div>
      <div className="feature-content">
        <h4 className="text-[#441b10]">Fresh</h4>
        <p className="text-[#441b10]"   >Breads baked in-house daily and ingredients without added preservatives</p>
      </div>
    </div>

    {/* Feature Item */}
    <div className="feature-item">
      <div className="icon-circle w-12">
        <img src="https://static.thenounproject.com/png/hot-icon-184690-512.png" alt="Pressed" />
      </div>
      <div className="feature-content">
        <h4 className="text-[#441b10]">Pressed</h4>
        <p className="text-[#441b10]">Sandwiches, Wraps, Platters, Desserts & More</p>
      </div>
    </div>

    <Link href="/menu" className="theme-btn btn-style-two mt-4">
      Buy Now
    </Link>

  </div>
</div>
 
                    
                </div>
            </div>
        </section>
        {/* End Juice Section */}
        </>
    )
}
