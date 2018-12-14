import { Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import IndexPage from './pages/IndexPage';
import ResumePage from './pages/ResumePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    console.log('publicrl', process.env.PUBLIC_URL);
    console.log('reactpubliclib', process.env.REACT_APP_PUBLIC_URL);

    return (
      <BrowserRouter
        basename={process.env.PUBLIC_URL || process.env.REACT_APP_PUBLIC_URL}
      >
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
