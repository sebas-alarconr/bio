import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';

const AppClient = () => (
  <Router basename={process.env.PUBLIC_URL || process.env.REACT_APP_PUBLIC_URL}>
    <App />
  </Router>
);

ReactDOM.render(<AppClient />, document.getElementById('root'));
serviceWorker.unregister();
