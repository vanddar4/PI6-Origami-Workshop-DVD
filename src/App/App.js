import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import "./App.css";

import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import User from "../User/User";
import FourOFour from '../404/404';
import Input from '../Input/Input';
import Register from '../Forms/Register';
import Login from '../Forms/Login';

function App(props){
    return(
        <div className="App">
            <Router>
                <Navigation /> 
                <div className="Container">
                    <Aside />
                    <Switch>
                        <Route path="/" exact component={Main}/>
                        <Route path="/post" component={Input}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/profile" component={User}/>
                        <Route component={FourOFour}/>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    )
}

export default App;