import React, { Component } from 'react';
import './View.css';

export default class View extends Component {

    buildRosterList = () => {
        const playersList = JSON.parse(localStorage.getItem('playersList'));
        return playersList.map((player) => {
            return (
                <li className="player-line" key={player.name}>
                    <span className="roster-entry-left">Name: {player.name}</span>
                    <span className="roster-entry-right">Position: {player.position}</span>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="view-container">
                <h2>View Roster</h2>
                <ul className="roster-list">
                    {this.buildRosterList()}
                </ul>
            </div>
        )
    }
}
