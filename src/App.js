import React from 'react';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Resume from 'pages/Resume';

import Layout from 'components/Layout';

import configureStore from 'state/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout path="/">
        <Home path="/" />
        <Resume path="/resume" />
        <NotFound default />
      </Layout>
    </Router>
  </Provider>
);

export default App;
