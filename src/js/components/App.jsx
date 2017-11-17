import React, { Component } from 'react';
import maidenImage from '../../assets/maiden.png';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello from Monica</h1>
        <img src={maidenImage} alt="Up The Irons!" />;
      </div>
    );
  }
}
