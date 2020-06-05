import { Router } from '@reach/router';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from 'components/Header';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Resume from 'pages/Resume';

const App = () => (
  <>
    <Header />
    <ToastContainer />
    <main>
      <Router>
        <Home path="/" />
        <Resume path="/resume" />
        <NotFound default />
      </Router>
    </main>
  </>
);

export default App;
