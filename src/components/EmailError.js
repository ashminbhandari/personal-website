import peep from '../images/peep-54.png';
import React from "react";
import {NavLink} from "react-router-dom";

const EmailError = () => {
    return(
        <div className="contact-wrapper text-design">
            <div>
                <img src={peep} alt="Credit to the open-peeps illustration library"/>
                <p>Oof, there was a problem sending that email...</p>
                <br/>
                <NavLink className="try-again-btn" to="/contact" style={{color: 'white', backgroundColor: 'black', textDecoration: 'none'}}>
                    <i className="fa fa-phone fa-lg"/><span> Try again</span>
                </NavLink>
            </div>
        </div>
    )
};

export default EmailError;
