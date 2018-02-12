import React, { Component } from 'react';
import './Edit.css';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: ''
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //get playersList from out of local storage.
        let playersList = JSON.parse(localStorage.getItem('playersList'));
        //conditional to check if playersList is null before continuing
        playersList = !playersList ? [] : playersList;
        //push new entry to playersList
        playersList.push(
            {
                name: this.state.name,
                position: this.state.position
            }
        );
        //save the whole thing back to local storage.
        localStorage.setItem('playersList', JSON.stringify(playersList));
        //setState back to empty so that the form clears.
        this.setState({
            name: '',
            position: ''
        })
        this.formRef.reset();
    }

    render() {
        return (
            <div className="edit-container">
                <h2>Edit Roster</h2>
                <form onSubmit={this.handleSubmit} ref={(el) => this.formRef = el}>
                    <label>
                        Player Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Player Position:
                        <input
                            type="text"
                            name="position"
                            value={this.state.Position}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}
