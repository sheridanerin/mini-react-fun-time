import React, { Component } from 'react';
import { NavLink, HashRouter } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="header-container">
                    <NavLink className="header-link" to="/">Home</NavLink>
                    <NavLink className="header-link" to="/view">View</NavLink>
                    <NavLink className="header-link" to="/edit">Edit</NavLink>
                </div>
            </HashRouter>
        )
    }
}
