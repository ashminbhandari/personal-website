import peep from '../images/peep-36.png';
import React from "react";

const Error404 = () => {
    return(
        <div className="contact-wrapper text-design">
            <div>
                <img src={peep} alt="Credit to the open-peeps illustration library"/>
                <p>ARRRR, we are in 404 island...</p>
            </div>
        </div>
    )
}

export default Error404;
