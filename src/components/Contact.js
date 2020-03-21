import React from 'react';
import '../styles/Contact.css';
import peep from '../images/peep-67.png';
import emailjs from "emailjs-com";

const Contact = (props) => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_OAElYjXN', e.target, 'user_vPWnOY9oWo41IdAxxA6TY')
            .then(() => {
                props.history.push('email-thanks')
            }, (error) => {
                console.log(error.text);
                props.history.push('/email-error');
            });
    };

    return (
        <div className="contact-wrapper text-design">
            <div>
                <img src={peep} alt="Credit to the open-peeps illustration library"/>
                <h1>Contact Me</h1>
                <br/>
                <p>As I am graduating soon, I am interested in job opportunities. If something spells cool, please let
                    me know. </p>
                <br/>
                <form onSubmit={sendEmail}>
                    <input className="text-design" type="text" id="name" name="name" placeholder="Name"/>
                    <input type="text" className="text-design" id="email" name="email" placeholder="Email" required/>
                    <input type="text" className="text-design" id="subject" name="subject" placeholder="Subject"/>
                    <textarea id="message" className="text-design" name="message" placeholder="Message"/>
                    <button type="submit" className="text-design"><i className="fa fa-send"/> Send</button>
                    <a id="phone" href="tel: 201-887-8585"><i className="fa fa-phone"/> 201- 887-8585</a>
                    <a href="mailto: abhandar@ramapo.edu"><i className="fa fa-envelope"/> abhandar@ramapo.edu</a>
                </form>
            </div>
        </div>
    )
};

export default Contact;
