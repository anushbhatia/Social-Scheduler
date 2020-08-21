import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
import download from "./404.png";

function Error() {
return (
<div class="container">
  <div class="row">
    <div class="col">
      <img src={download} alt="" />

    <div className="wrapper">  
    <div className="line"></div>
     <div className="button">404 ERROR !</div>
    </div>
    
    <p className="content">WE SINCERELY APOLOGIZE</p>
    <p>Uh oh, we can't seem to find the page you're looking for.</p>
    <p> Try going back to the previous page for more information.</p>
    <div className="wrapper1">  
    <div className="line1">
      </div><NavLink className="button1" to="/"> Go Home </NavLink></div>
    </div>
  </div>
</div>
  );
}
export default Error;

