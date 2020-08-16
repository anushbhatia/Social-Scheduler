import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import Default from './components/Default';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />        
        <Route path="/about" component={About} />        
        <Route path="/contact" component={Contact} />
        <Route path="/detail" component={Detail} />

        <Route component={Default} />
      </Switch>  
      <Footer/>    
    </>
  )
}

export default App;