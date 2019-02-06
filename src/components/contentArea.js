import React, { Component } from 'react';
import '../styles/App.css';

export class ContentArea extends Component {
  render() {
    const { title } = this.props;
    return(
      <div className="Content">
        <h1 className="Content-header">{title}</h1>
          {this.props.children}
        <hr/>
      </div>
    );
  }
}