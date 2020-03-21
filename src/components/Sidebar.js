import React from 'react';
import '../styles/Sidebar.css';
import {NavLink} from 'react-router-dom';
import pdf from '../misc/resume.pdf';

const Sidebar = () => {
    return(
        <div className="side-nav text-design">
            <div className="nav-items">
                <div className="nav-item">
                    <NavLink to="/" style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-home fa-3x"/><span>Home</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={{pathname:"/loading", state:"/about"}} style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-user fa-3x"/><span>About</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={{pathname:"/loading", state:"/coder"}} style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-github fa-3x"/><span>Code</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={{pathname:"/loading", state:"/photo"}} style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-camera-retro fa-3x"/><span>Photo</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to={{pathname:"/loading", state:"/sound"}} style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-soundcloud fa-3x"/><span>Sound</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <a href={pdf} target="_blank" style={{color: '#fff', textDecoration: 'none'}}><i className="fa fa-file-text fa-3x"/><span>Resume</span></a>
                </div>
                <div className="nav-item">
                    <NavLink to={{pathname:"/loading", state:"/contact"}} style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-phone fa-3x"/><span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
