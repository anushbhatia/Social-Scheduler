import React from "react";
import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

function Navbar() {
    return(
        <NavWrapper className="navbar navbar-expand-sm navbar-light px-sm-5">  
            <div className="ml-auto navbar-nav">
                <Link to="/">
                    <div className="nav-item text-dark px-4 font-weight-bold">
                        Home
                    </div>
                </Link>
                <Link to="/about">
                    <div className="nav-item text-dark px-4 font-weight-bold">
                        About
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="nav-item text-dark px-4 font-weight-bold">
                        Contact
                    </div>
                </Link>
                <Link to="/detail">
                    <div className="nav-item text-dark px-4 font-weight-bold">
                        Contributers
                    </div>
                </Link>
            </div>            
        </NavWrapper>
    )
}

const Navbar = () => {


  /*-------All Nav links goes here------------------ */
  const Navlinks = [
    { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow mb-3 py-3 bg-white">
        <div className="container">
          <NavLink className="display-1 navbar-brand" to="/">
            <FaPaperPlane className="mx-2" />
            Social Scheduler
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              {
                Navlinks.map((i) => [
                    /*--------For large screen---------- */
                    <NavLink key={i.name} exact className="d-none d-lg-block nav-link btn btn-info mx-2" to={i.path} style={{color: "white"}}>
                      {i.name}
                    </NavLink>,

                    /*--------For small screen----------- */
                    <NavLink key={i+1} exact className="d-lg-none d-xl-none nav-link my-2" to={i.path}>
                    {i.name}
                    </NavLink>
                ])                  
              }
              
            </div>
          </div>
        </div>
      </nav>
    );
};


export default Navbar;
