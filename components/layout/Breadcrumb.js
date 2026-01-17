import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle,heading }) {
    return (
        <>
        {/* Page Title */}
        <section className="page-title" style={{ backgroundImage: 'url(assets/slider/about-bg-gray.webp)' }} >
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-7.png)' }} ></div>
            <div className="auto-container">
                <h2 className="!text-[#582414]">{heading}</h2>
                <h2 className="!text-[#582414]">{breadcrumbTitle}</h2>
                <ul className="page-breadcrumb ">
                    <li ><Link className="!text-gray-400" href="/">home</Link></li>
                    <li className="!text-[#582414] !text-2xl">{breadcrumbTitle}</li>
                </ul>
            </div>
        </section>
        {/* End Page Title */}

        </>
    )
}
