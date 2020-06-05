import { createHistory, LocationProvider } from '@reach/router';
import createHashSource from 'hash-source';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const source = createHashSource();
const history = createHistory(source);

const AppClient = () => (
  <LocationProvider history={history}>
    <App />
  </LocationProvider>
);

ReactDOM.render(<AppClient />, document.getElementById('root'));
serviceWorker.unregister();
