import React, { Component } from 'react';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ToastContainer />
        <article className="app-content">
          {this.props.children}
        </article>
      </React.Fragment>
    );
  }
}

export default Layout;
