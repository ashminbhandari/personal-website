import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="side-nav">
            <div className="nav-items">
                <div>
                    <i className="fa fa-home fa-3x"/><span>Home</span>
                </div>
                <div>
                    <i className="fa fa-user fa-3x"/><span>About</span>
                </div>
                <div>
                    <i className="fa fa-file-text fa-3x"/><span>Resume</span>
                </div>
                <div>
                    <i className="fa fa-phone fa-3x"/><span>Contact</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
