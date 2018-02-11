import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import Edit from '../Edit/Edit.js'
import View from '../View/View.js'
import Home from '../Home/Home.js'
import './Body.css';

export default class Body extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/edit" component={Edit}/>
                    <Route path="/view" component={View}/>
                </div>
            </HashRouter>
        )
    }
}
