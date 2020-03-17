import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Typing from 'react-typing-animation';
import './Landing.css';

function Landing() {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div id="console-stmnt">
                <Typing className="text-design" cursorClassName="text-design" speed={40}>
                    <span>console.log('Hello world! I am Ashmin');</span>
                </Typing>
                </div>
                <div id="console-stmnt1">
                    <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={2200}>
                        <span>console.log('a web developer and photographer.');</span>
                    </Typing>
                </div>
                <div>
                <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={5100}>
                    <span>if (hereFor === coder) &#123; </span>
                </Typing>
                </div>
                <div>
                    <i className="fa fa-code btn"/>
                </div>
                <div>
                <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={6200}>
                    <span>}</span>
                </Typing>
                <br/>
                <br/>
                </div>
                <div>
                <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={6300}>
                    <span>else &#123;</span>
                </Typing>
                </div>
                <div>
                    <i className="fa fa-camera btn"/>
                </div>
                <div>
                <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={6700}>
                    <span>}</span>
                </Typing>
                </div>
            </div>
        </div>
    );
}

export default Landing;
