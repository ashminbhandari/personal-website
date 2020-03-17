import React from 'react';
import './Sidebar.css';
import {NavLink} from 'react-router-dom';
import pdf from './resume.pdf';

function Sidebar() {
    return (
        <div className="side-nav">
            <div className="nav-items">
                <div className="nav-item">
                    <NavLink to="/" style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-home fa-3x"/><span>Home</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/about" style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-user fa-3x"/><span>About</span>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <a href={pdf} target="_blank" style={{color: '#fff', textDecoration: 'none'}}><i className="fa fa-file-text fa-3x"/><span>Resume</span></a>
                </div>
                <div className="nav-item">
                    <NavLink to="/contact" style={{color: '#fff', textDecoration: 'none'}}>
                        <i className="fa fa-phone fa-3x"/><span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
