import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
            </div>            
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background: white;        
`

export default Navbar
