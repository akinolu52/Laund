import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <p>&copy; {(new Date().getFullYear())} Webevolvers</p>
        <div className="footerPages">
            <Link to="/">Home</Link> 
            <Link to="/">About</Link> 
            <Link to="/">Services</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Terms</Link>
            {/* <Link to="/"></Link> */}
        </div>
    </footer>
);

export default Footer;
