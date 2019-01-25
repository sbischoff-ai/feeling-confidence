import React, { Component } from 'react';
import { Button } from './components/button.js'
import './App.css';
const logo = require('./ressources/logo.png');

class ContentArea extends Component {
  render() {
    return(
      <div className="Content">
        <h1 className="Content-header">{this.props.title}</h1>
        {this.props.children}
        <hr/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            We at <b>FEELING CONFIDENCE</b> are working on an awesome website for our coaching programme.
          </p>
          <Button text="Register for Email"/>
        </header>
        <ContentArea title="The Programme">
          <p>Feeling Confidence is a very nice programme and will help you loads. Scouts honour! :)</p>
        </ContentArea>
        <ContentArea title="About us">
          <p>We are very nice people and know stuff about brains.</p>
        </ContentArea>
        <ContentArea title="Impressum">
          Feeling Confidence Inc.<br/>
          Straßenberger Weg 123<br/>
          45678 Ruhrgebiet<br/>
        </ContentArea>
      </div>
    );
  }
}

export default App;
