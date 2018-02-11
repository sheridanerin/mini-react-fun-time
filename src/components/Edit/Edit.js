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

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="edit-container">
                <h2>Edit Roster</h2>
                <form onSubmit={this.handleSubmit}>
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
