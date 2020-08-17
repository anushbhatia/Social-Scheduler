import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Default from './components/Default';
import Contact from './components/Contact';
import AboutUs from "./components/About";
import Navbar from './components/Navbar';

function App() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />        
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>      
    </>
  )
}

export default App;
