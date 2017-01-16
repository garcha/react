import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Jazz"
    
    return (
      <div className="App">
        <h3>
          My name is {name}, my age is {10 + 21}
        </h3>
      </div>
    );
  }
}

export default App;
