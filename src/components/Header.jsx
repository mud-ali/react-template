import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Header Title</h1>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;