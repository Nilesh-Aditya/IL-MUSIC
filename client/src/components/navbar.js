import React from "react";
import { Link } from "react-router-dom";
import logo_head from "../img/project/I-L MUSIC.svg";
import logo from "../img/project/iconmonstr-sound-wave-1 1.svg";

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="logo">
                <img src={logo} alt="logo" />
                <img src={logo_head} alt="logo heading"/>
            </div>
            <div className="nav-headings">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/login">Log In</Link> </li>
                    <li><Link to="/signUp">Sign Up</Link></li>
                </ul>
            </div>   
        </React.Fragment>

    );
}
 
export default Navbar;