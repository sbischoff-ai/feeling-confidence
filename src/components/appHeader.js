import React, { Component } from 'react';
import { Button } from './button'
import '../styles/App.css';
const logo = require('../ressources/logo_wheel.png');

export class AppHeader extends Component {
    render() {
        return(
        <header className="App-header">
          <img src={logo} className="logo-wheel" alt="logo-wheel" />
          <p>
            We at <b>FEELING CONFIDENCE</b> are working on an awesome website for our coaching programme.
          </p>
          <Button text="Register for Email"/>
        </header>
        );
    }
}