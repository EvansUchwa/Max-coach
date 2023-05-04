import { useState } from "react"
import { Link } from "react-router-dom"
// import { SimpleImage } from "../Img"

export const Navbar = () => {
    const menuLinksArray = [
        { label: "Accueil", link: "/" },
        { label: "A propos", link: "/A-propos" },
        { label: "Tarifs", link: "/Tarifs" },
        { label: "Boutique", link: "/Boutique" },
        { label: "Contact", link: "/Contact" },
    ]

    function toggleNav() {
        if (!document.querySelector('.mobile-navLinksVisible')) {
            document.querySelector('html').style.overflow = 'hidden'
            document.querySelector('.mobile-navLinks').classList.add('mobile-navLinksVisible')
        } else {
            document.querySelector('html').style.overflow = 'initial'
            document.querySelector('.mobile-navLinks').classList.remove('mobile-navLinksVisible')
        }
    }
    return <nav className="nav">
        <section className="nav-border">
            <span></span>
            <span></span>
            <span></span>

        </section>
        <section className="nav-logo">
            <b>TME</b>
        </section>
        <section className="nav-pcLinks" >
            {
                menuLinksArray.map((lk, index) => <Link to={lk.link} key={"pc nav lk" + index}>
                    {lk.label} </Link>)
            }
        </section>

        {/* <aside className="mobile-navLinks-aftermobile-navLinks-after">

        </aside> */}
        <aside className="mobile-navLinks">
            <div>
                <section className="mn-closer">
                    <span className="nav-closer" onClick={() => toggleNav()}>
                        <i className="mdi mdi-close"></i>
                    </span>
                </section>
                <section className="mn-links">

                    {
                        menuLinksArray.map((lk, index) => <Link to={lk.link} key={"pc nav lk" + index}>
                            {lk.label} </Link>)
                    }
                </section>
            </div>
        </aside>

        <section className="nav-hambuger" onClick={() => toggleNav()}>
            <i className="mdi mdi-menu"></i>
        </section>

    </nav>
}

