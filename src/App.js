import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
