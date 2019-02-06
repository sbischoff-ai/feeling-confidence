import React, { Component } from 'react';
import { Button } from './button'
import '../styles/appHeader.css';
const logo = require('../ressources/logo_wheel.png');

export class AppHeader extends Component {
    render() {
        return(
            <header className="App-header">
                <div className="Home-content">
                    <img src={logo} className="Logo-wheel" alt="logo-wheel" />
                    <p>
                        We at <b>FEELING CONFIDENCE</b> are working on an awesome website for our coaching programme.
                    </p>
                    <Button text="Register for Email"/>
                </div>
                <div className="Navbar">
                    <a class="active" href="#home">Home</a>
                    <a href="#programme">The Programme</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#impressum">Impressum</a>
                </div>
            </header>
        );
    }
}