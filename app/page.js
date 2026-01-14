import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Blog from "@/components/sections/home1/Blog"

import Testimonial from "@/components/sections/home1/Testimonial"
import Gallery from "@/components/sections/home1/Gallery"
import Juice from "@/components/sections/home1/Juice"
import Beverage from "@/components/sections/home1/Beverage"
import Deal from "@/components/sections/home1/Deal"
import Recipe from "@/components/sections/home1/Recipe"
import Fluid from "@/components/sections/home1/Fluid"
import Pressmanspromise from "../components/sections/pressmanspromise/test";
import Restaruentvideo from "@/components/sections/restaurentvideo/Restaurentvideo";

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Juice/>
                <Beverage/>
                <Pressmanspromise />
                <Recipe/>
                <Deal/>
                <Fluid/>
                {/* <Restaruentvideo /> */}
                {/* <Testimonial /> */}
                {/* <Blog /> */}
                {/* <Gallery /> */}
            </Layout>

        </>
    )
}