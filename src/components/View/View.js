import React, { Component } from 'react';
import './View.css';

export default class View extends Component {
    constructor(props) {
        super(props);
        const players = JSON.parse(localStorage.getItem('playersList'));
        this.state = {
            playersList: players
        };
    }

    deletePlayer = (index) => {
        let newPlayersList = this.state.playersList.slice();
        newPlayersList.splice(index, 1);
        localStorage.setItem('playersList', JSON.stringify(newPlayersList));
        this.setState({playersList: newPlayersList});
    }

    buildRosterList = () => {
        return this.state.playersList.map((player, index) => {
            return (
                <li className="player-line" key={index}>
                    <span className="roster-entry-left">Name: {player.name}</span>
                    <button onClick={this.deletePlayer.bind(null, index)} className="delete-button">Remove Player</button>
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
