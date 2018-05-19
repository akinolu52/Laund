import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Header from '../../partials/header'
import Footer from '../../partials/footer'

const App = () => (
  <div>
    <Header/>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>

    <Footer/>
  </div>
);

export default App;
