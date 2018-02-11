import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import './Header.css';
import Edit from "../Edit/Edit.js";
import View from "../View/View.js";

export default class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="header-container">
                        <NavLink className="header-link" to="/view">View</NavLink>
                        <NavLink className="header-link" to="/edit">Edit</NavLink>
                    </div>
                    <div className="content">
                        <Route path="/view" component={View}/>
                        <Route path="/edit" component={Edit}/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
