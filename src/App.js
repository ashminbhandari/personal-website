import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Landing from './components/Landing';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Contact from './components/Contact';
import Coder from './components/Coder';
import Photo from './components/Photo';
import EmailError from './components/EmailError';
import EmailThanks from './components/EmailThanks';
import Error404 from './components/Error404';
import Sound from './components/Sound';
import Loading from './components/Loading';



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
                            <Route path="/contact" component={Contact}/>
                            <Route path="/coder" component={Coder}/>
                            <Route path="/photo" component={Photo}/>
                            <Route path="/sound" component={Sound}/>
                            <Route path="/email-error" component={EmailError}/>
                            <Route path="/email-thanks" component={EmailThanks}/>
                            <Route path ="/loading" component={Loading}/>
                            <Route component={Error404}/>
                        </Switch>

                    </div>

                </BrowserRouter>

            </div>
        );
    }
}

export default App;
