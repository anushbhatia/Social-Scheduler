import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";
import download from "./404.png";
import notfoundimg from "./PageNotFound.png";

function Error() {
return (
<div className="style">
    <img src={download} alt="" /> <h1>Error</h1>
    <img src={notfoundimg} alt="" id="styling" />
    <div className="text">
       Sorry! The page does not exist.
    </div>
<hr />
    <p>
    <NavLink to="/" className="button">
          Go Back{" "}
    </NavLink>
    </p>
</div>
  );
}
export default Error;
