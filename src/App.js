import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Default from './components/Default';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />        
        <Route path="/about" component={About} />        
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>      
    </>
  )
}

export default App;