import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Dashboard</h1>
          <h5 className="App-subtitle">Good morning</h5>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
