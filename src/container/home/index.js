import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <div className="features">
            <h1>
                Laund-It will handle washing, ironing drying and the delivery of your clothes. Try Laund-It
            </h1>
            <div className="features-list">
                <div className="feature">
                    <img src="../../../images/home/icon-washing.png" className="img-hack" alt="icon" />
                    <h3>Washing</h3>
                    <p>We wash your cloth</p>
                </div>
                <div className="feature">
                <img src="../../../images/home/icon-iron.png" alt="icon"  />
                    <h3>Ironing</h3>
                    <p>We wash your cloth</p>
                </div>
                <div className="feature">
                <img src="../../../images/home/icon-towel.png" className="img-hack" alt="icon"  />
                    <h3>Drying</h3>
                    <p>We wash your cloth</p>
                </div>
                <div className="feature">
                <img src="../../../images/home/icon-delivery.png" alt="icon"  />
                    <h3>Delivery</h3>
                    <p>We wash your cloth</p>
                </div>
            </div>
        </div>
        <div className="about">
            <h1>Every month we create hundred of resource for you to use in commercial and non-commercial projects</h1>
            <div className="icons">
                <img src='../../../images/home/xd_icon.png' alt="icon"  />
                {/* <img src={require('../../../images/home/xd_icon.png')} /> */}
                <img src='../../../images/home/sketch_icon.png' alt="icon"  />
            </div>
        </div>
        <div className="callToAction">
            <h1>Sign Up Now</h1>
            <Link to="/" className="btnFilled">Get Started</Link>
        </div>
    </div>
    
);

export default Home;
