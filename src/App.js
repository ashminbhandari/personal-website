import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Typing from 'react-typing-animation';
import './App.css';


function App() {
    return (
        <div className="wrapper">
            <div className="main-content">
                <Typing className="text-design" cursorClassName="text-design" speed={150}>
                    <span>if (hereFor === coder) &#123; </span>
                </Typing>
                <div>
                    <i className="fa fa-code btn"/>
                </div>
                <Typing className="text-design" cursorClassName="text-design" speed = {150} startDelay={4200}>
                    <span>}</span>
                </Typing>
                <br/>
                <br/>
                <Typing className="text-design" cursorClassName="text-design" speed = {150} startDelay={4700}>
                    <span>else &#123;</span>
                </Typing>
                <div>
                    <i className="fa fa-camera btn"/>
                </div>
                <Typing className="text-design" cursorClassName="text-design" speed = {150} startDelay={6000}>
                    <span>}</span>
                </Typing>
            </div>
        </div>
    );
}

export default App;
