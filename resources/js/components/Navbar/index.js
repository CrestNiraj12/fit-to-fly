import React, { useState, useEffect } from "react";
import { List } from "react-bootstrap-icons";

const Navbar = () => {
    const [showNav, setShowNav] = useState(
        window.innerWidth >= 768 ? true : false
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100)
            document.querySelector("#navbar").style.position = "fixed";
        else document.querySelector("#navbar").style.position = "relative";
    };

    const handleToggleNav = () => {
        if (window.innerWidth < 768) setShowNav(!showNav);
    };

    return (
        <nav className="navbar" role="navigation" id="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/">
                        <img
                            className="nav-logo"
                            src="https://i.imgur.com/k3bQxs1.png"
                            alt="Woolwich Late Night Pharmacy"
                        />
                    </a>
                </div>
                <ul
                    className="nav navbar-nav"
                    style={{ display: showNav ? "flex" : "none" }}
                >
                    <li>
                        <a href="/#testingSites" onClick={handleToggleNav}>
                            Testing Sites
                        </a>
                    </li>
                    <li>
                        <a href="/#bookTest" onClick={handleToggleNav}>
                            Book Test
                        </a>
                    </li>
                </ul>
                <button
                    onClick={handleToggleNav}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <List />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
