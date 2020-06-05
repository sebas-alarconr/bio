import { Router } from '@reach/router';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import IndexPage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import ResumePage from './pages/Resume';

class App extends Component {
  render = () => (
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

export default App;
