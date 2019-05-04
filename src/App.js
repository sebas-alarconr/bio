import { Router } from '@reach/router';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import ResumePage from './pages/ResumePage';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ToastContainer />
        <main>
          <Router>
            <IndexPage path="/" />
            <ResumePage path="/resume" />
            <NotFoundPage default />
          </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
