import peep from '../images/peep-76.png';
import React from "react";

const EmailError = () => {
    return(
        <div className="contact-wrapper text-design">
            <div>
                <img src={peep} alt="Credit to the open-peeps illustration library"/>
                <p>Yoooho, I will get back to you ASAP...</p>
                <br/>
            </div>
        </div>
    )
};

export default EmailError;
