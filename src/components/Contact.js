import React from 'react';
import '../styles/Contact.css';

import peep from '../images/peep-67.png';

function Contact() {
    return(
        <div className="contact-wrapper text-design">
            <div>
                <img src={peep} alt="contact peep"/>
                <h1>Contact Me</h1>
                <br/>
                <p>As I am graduating soon, I am interested in job opportunities. If something spells cool, please let me know. </p>
                <br/>
                <form className="text-design">
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <input type="text" id="subject" name="subject" placeholder="Subject"/>
                    <textarea id="message" className="text-design" name="message" placeholder="Message"/>
                    <a href="#"><i className="fa fa-send" onClick={console.log()}/>Send</a>
                    <a id="phone" href="mailto: abhandar@ramapo.edu"><i className="fa fa-phone"/>201- 887-8585</a>
                    <a href="tel: 201-887-8585"><i className="fa fa-envelope"/>abhandar@ramapo.edu</a>
                </form>
            </div>
        </div>
    )
}

export default Contact;
