import React, { Component } from 'react';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './Layout.scss';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ToastContainer />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default Layout;
