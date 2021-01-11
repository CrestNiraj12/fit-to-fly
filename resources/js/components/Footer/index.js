import React from "react";
import { Link } from "react-router-dom";

const links = [
    { title: "FAQ's", url: "#" },
    { title: "Privacy Policy", url: "#" },
    { title: "Refund Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
];

const Footer = () => {
    return (
        <footer>
            <h5>Quick links</h5>
            <ul className="footer-links">
                {links.map(({ title, url }, index) => (
                    <li key={index}>
                        <Link to={url}>{title}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <small>&copy;The Woolwich Pharmacy 2021</small>
        </footer>
    );
};

export default Footer;
