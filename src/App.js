import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import Welcome from './Welcome.js'

class App extends Component {
  render() {
    return (
      <div>
      <Home />
      <Welcome />
      </div>
    );
  }
}

export default App;
