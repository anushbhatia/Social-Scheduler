import React from "react";
import {BsArrowDown} from "react-icons/bs";

import {
    GoLocation
} from "react-icons/go"

function SocialCardDisplay(props)
{
    
    return (
        <div className="cards py-3 px-3">
            <div>
            <h4 className="card-heading">
                {props.cards.name}
            {props.cards.logo}
            </h4>
            </div>
            <p className="card-title">{props.cards.title}</p>
            <p className="card-location"><GoLocation className="mr-2" />{props.cards.location}</p>
            <div className="button-encloser text-center">
                <button className="card-button btn btn-info rounded-circle text-center mb-2" onClick={() => props.toggle(props.index)} id={"b"+(props.index)}>
                    <BsArrowDown className="" size="2rem" />
                </button>
            </div>
            
            <div className="card-description" key={props.index} id={props.index}>                
                    {props.cards.description}        
            </div>
            
        </div>
    )
}

export default SocialCardDisplay;