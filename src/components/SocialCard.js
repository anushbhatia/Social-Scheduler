import React, { useState } from "react"
import SocialCardDisplay from "./SocialCardDisplay";
import {
    TiSocialFacebookCircular,
    TiSocialGithub,
    TiSocialTwitterCircular,
    TiSocialLinkedin,
} from "react-icons/ti";

const SocialCardOptions = [
    {
        name : "Facebook",
        logo : <TiSocialFacebookCircular className="float-right" size="3rem" />,
        location : "Kolkata, India",
        title : "This is the title",
        description : "Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
        name : "Github",
        logo : <TiSocialGithub className="float-right" size="3rem" />,
        location : "Jaipur, India",
        title : "This is the title",
        description : "Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
        name : "LinkedIn",
        logo : <TiSocialLinkedin className="float-right" size="3rem" />,
        location : "Chennai, India",
        title : "This is the title",
        description : "Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
        name : "Twitter",
        logo : <TiSocialTwitterCircular className="float-right" size="3rem" />,
        location : "Bangalore, India",
        title : "This is the title",
        description : "Lorem ipsum dolor sit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
]


function SocialCards()
{
    const toggleCard = (i)  => {
        
        var cardd = document.getElementById(i);
        var but = document.getElementById("b"+i);
        if(cardd.style.maxHeight == "0px"){
            cardd.style.maxHeight = "1000px";
            but.style.transform = "rotate(180deg)";
        }
        else{
            cardd.style.maxHeight = "0px";
            but.style.transform = "rotate(-0deg)";
        }
    }

    return (
        <div className="card-row">
            
            {
                SocialCardOptions.map((card, index) => {
                    return (
                        <>
                            <SocialCardDisplay cards={card} index={index} toggle={toggleCard} />
                        </>
                    )
                })
                
            }
        </div>
    )
}
export default SocialCards;