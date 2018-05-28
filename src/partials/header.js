import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// const check = withRouter(props => <Header {...props} />);
// pathname
// const Header = () => (
class Header extends React.Component {
    constructor(props) {
        super(props);

        // this.getPath();
    }
    render ()  {
        return (
            <header>
                <nav>  
                    <Link to="/">Laund It</Link>
                    <Link to="/about-us">About</Link>
                    <Link to="/">Sign in | up</Link> 
                </nav>
                <div >
                    <h1>{ this.props.location }Laund-It: Wash it chaper and get it to you faster.</h1>
                    <Link to="/" className="btnOutline">Pricing</Link>
                </div>
                <div >
                    {/* <form>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Sign In" />
                    </form> */}
                    {/* <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Sign Up" />
                    </form> */}
                </div>
            </header> 
        )
    }
};

export default Header;
