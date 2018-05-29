import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import SignIn from '../sign-in';
import SignUp from '../sign-up';
// import pricing from '../about';
// import Header from '../../partials/header'
import Footer from '../../partials/footer'

const App = () => (
  <div>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/pricing" component={About} />
    </main>

    <Footer/>
  </div>
);

export default App;
