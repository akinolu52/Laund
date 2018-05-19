import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Header>
            <nav>
                <Link to="/">Laund <span>It</span></Link>
                <Link to="/about-us">About</Link>
                <Link to="/">Sign Up | In</Link> 
            </nav>
            <h1>Laund-It: Wash it chaper and get it to you faster.</h1>
            <Link to="/" className="btnOutline">Pricing</Link>
        </Header>
        <div className="features">
            <h1>
                this is our tagline
            </h1>
            <div className="feature">
                <i className="fa fa-person fa-4x"></i>
                <h3>Logistics</h3>
                <p>We wash your cloth</p>
            </div>
            <div className="feature">
                <i className="fa fa-person fa-4x"></i>
                <h3>Washing</h3>
                <p>We wash your cloth</p>
            </div>
            <div className="feature">
                <i className="fa fa-person fa-4x"></i>
                <h3>delivery</h3>
                <p>We wash your cloth</p>
            </div>
            <div className="feature">
                <i className="fa fa-person fa-4x"></i>
                <h3>Ironing</h3>
                <p>We wash your cloth</p>
            </div>
            <div className="feature">
                <i className="fa fa-person fa-4x"></i>
                <h3>Drying</h3>
                <p>We wash your cloth</p>
            </div>
        </div>
    </div>
    
    
);

export default Header;
