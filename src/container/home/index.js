import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../partials/header'

const Home = () => (
    <div>
        <Header page="home"/>
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
        
        <div className="contact">
            <h2>Contact <span>Us</span></h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea row="2" placeholder="Message"></textarea>
                <input type="submit" value="Get in touch" />
            </form>
        </div>
    </div>
    
);

export default Home;
