import React from 'react';
import {NavLink} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Typing from 'react-typing-animation';
import '../styles/Landing.css';
import download_app_store from '../images/download_on_app_Store.png';

const Landing = () => {
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
                        <span>console.log('a software engineer and photographer.');</span>
                    </Typing>
                </div>
                <div>
                    <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={5100}>
                        <span>if (hereFor === software engineer) &#123; </span>
                    </Typing>
                </div>
                <div className="github-icon">
                    <NavLink to={{pathname: "/loading", state: "/coder"}}
                             style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-github-alt btn"/>
                    </NavLink>
                </div>
                <div>
                    <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={6700}>
                        <span>}</span>
                    </Typing>
                    <br/>
                    <br/>
                </div>
                <div>
                    <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={7000}>
                        <span>else &#123;</span>
                    </Typing>
                </div>
                <div className="github-icon">
                    <NavLink to={{pathname: "/loading", state: "/photo"}}
                             style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-camera-retro btn"/>
                    </NavLink>

                </div>
                <div>
                    <Typing className="text-design" cursorClassName="text-design" speed={40} startDelay={7600}>
                        <span>}</span>
                    </Typing>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px'
            }}>
                <a href={"https://apps.apple.com/us/app/opencircle-music-discovery/id1516421718?ls=1"} target="_blank">
                    <img src={download_app_store}/>
                </a>
            </div>
        </div>
    );
};

export default Landing;


