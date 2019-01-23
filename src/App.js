import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            We at <b>FEELING CONFIDENCE</b> are working on an awesome website for our coaching programme.
          </p>
          Stay tuned and check back later
        </header>
      </div>
    );
  }
}

export default App;
