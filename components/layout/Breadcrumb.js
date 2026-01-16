import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

        {/* Page Title */}
        <section className="page-title" style={{ backgroundImage: 'url(assets/slider/about-bg-gray.webp)' }} >
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-7.png)' }} ></div>
            <div className="auto-container">
                <h2 className="!text-black">{breadcrumbTitle}</h2>
                <ul className="page-breadcrumb ">
                    <li><Link href="/">home</Link></li>
                    <li className="!text-black !text-5xl">{breadcrumbTitle}</li>
                </ul>
            </div>
        </section>
        {/* End Page Title */}

        </>
    )
}
