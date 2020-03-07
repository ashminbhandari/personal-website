import React, {useState} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Landing from './Landing';
import Sidebar from './Sidebar';


class App extends React.Component {
    render() {
        return (
            <div className="main-page-grid">
                <div id="stars"/>
                <div id="stars2"/>
                <div id="stars3"/>
                <div id="stars4"/>
                <canvas ref={this.canvasRef} width={300} height={300}/>
                <div className="sidebar">
                    <Sidebar/>
                </div>
                <div className="content">
                    <Landing/>
                </div>
            </div>
        );
    }
}

export default App;
