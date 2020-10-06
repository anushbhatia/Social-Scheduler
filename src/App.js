import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Default from './components/Default';
import Contact from './components/Contact';
import AboutUs from './components/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Signin from './components/Signin';
import UserRegister from './components/UserRegistration';
import { default as Contributors } from './components/pages/Contributor/Cards';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/about' component={AboutUs} />
				<Route path='/contact' component={Contact} />
				<Route path='/detail' component={Contributors} />
				<Route path='/signin' component={Signin} />
				<Route path='/register' component={UserRegister} />
				<Route component={Default} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
