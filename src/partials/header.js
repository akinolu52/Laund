import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    renderSwitch () {
        switch (this.props.page) {
            case 'signin':
            return (
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign In" />
                </form>
            );
            case 'signup':
            return (
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email" />
                    <input type="tel" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Sign Up" />
                </form>
            );
            default:
            return (
                <div>
                    <h1>Laund-It: Wash it chaper and get it to you faster.</h1>
                    <Link to="/" className="btnOutline">Pricing</Link>
                </div>
            );

        }
    }
    render ()  {
        return (
            <header>
                <nav>  
                    <Link to="/">Laund It</Link>
                    <Link to="/sign-in">Sign in</Link> 
                    <Link to="/sign-up">Sign up</Link> 
                    <Link to="/">Pricing</Link> 
                </nav>
                <div>
                    { this.renderSwitch() }
                </div>
            </header> 
        )
    }
};

export default Header;
