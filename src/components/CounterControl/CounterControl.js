import React, { Component } from 'react';

import './CounterControl.css';

export default class CounterControl extends Component {
    render() {
        return (
            <div className="CounterControl" onClick={this.props.clicked}>
                {this.props.label}
            </div>
        )
    }
}
