import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';
import Landing from './Landing';
import Sidebar from './Sidebar';
import About from './About';


class App extends React.Component {
    render() {
        return (

            <div className="main-page-grid">
                <div className="stars-container">
                    <div id="stars"/>
                    <div id="stars2"/>
                    <div id="stars3"/>
                </div>

                <BrowserRouter>




                    <div className="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={Landing}/>
                            <Route path="/about" component={About}/>
                        </Switch>
                    </div>


                </BrowserRouter>

            </div>
        );
    }
}

export default App;
