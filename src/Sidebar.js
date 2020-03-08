import React from 'react';
import './Sidebar.css';
import {Link, NavLink} from 'react-router-dom';

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
                    <Link style={{color: '#fff', textDecoration: 'none'}}>

                        <i className="fa fa-file-text fa-3x"/><span>Resume</span>

                    </Link>
                </div>
                <div className="nav-item">
                    <Link style={{color: '#fff', textDecoration: 'none'}}>

                        <i className="fa fa-phone fa-3x"/><span>Contact</span>

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
