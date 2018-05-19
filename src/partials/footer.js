import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div style={{ backgroundColor: 'blue' }}>
        <Link to="/">Home</Link> |
        <Link to="/about-us">About</Link>
    </div>
);

export default Footer;
