import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/temp-logo.jpg";

const Navbar = () => {
	/*-------All Nav links goes here------------------ */
	const Navlinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Contributors', path: '/detail' },
		{ name: 'Contact', path: '/contact' },
		{ name: 'Signin', path: '/signin' }
	];

    return (
      <nav class="navbar navbar-expand-lg navbar-light">
      <NavLink to="/" class="navbar-brand">
        <img src={Logo} className="logo"/>
        Social Scheduler</NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
      {
        Navlinks.map((i) =>
            <li className="nav-item">
            <NavLink key={i.name} className="nav-link" to={i.path} >
              {i.name}
            </NavLink>
            </li>
      )
      }

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i>  Sign In
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <NavLink class="dropdown-item" to="">--</NavLink>
            <NavLink class="dropdown-item" to="">--</NavLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
    );
};

export default Navbar;
