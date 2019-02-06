import React, { Component } from 'react';
import '../styles/button.css';

export class Button extends Component {
    render = () => {
        return(
            <button class="Btn">{this.props.text}</button>
        )
    }
}