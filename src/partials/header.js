import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <Link to="/">Laund <span>It</span></Link>
            <Link to="/about-us">About</Link>
            <Link to="/">Sign Up | In</Link> 
        </nav>
        <h1>Laund-It: Wash it chaper and get it to you faster.</h1>
        <Link to="/" className="btnOutline">Pricing</Link>
    </header> 
);

export default Header;