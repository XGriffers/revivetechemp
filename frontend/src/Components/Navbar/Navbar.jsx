import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo192 from "../../images/logo192.png";


const Navbar = () => {

    return (

        <>
            <nav className="navbar">
                <div className="nav-wrapper">
                    <Link to="/">
                        <i className="fas fa-chess-knight">
                            <img className="nav-logo" src={logo192} alt="" />
                        </i>
                    </Link>

                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    );
};

export default Navbar;
