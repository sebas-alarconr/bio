import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

class IndexPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/resume">Resume</Link>
        </header>
      </div>
    );
  }
}

export default IndexPage;