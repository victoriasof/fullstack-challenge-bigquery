import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Products from './components/products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Dashboard</h1>
          <h5 className="App-subtitle">Good day <span role="img" aria-label="waving">👋</span></h5>
        </header>
        <Products />
      </div>
    );
  }
}

export default App;
