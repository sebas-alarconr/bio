import { Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import IndexPage from './pages/IndexPage';
import Layout from './Layout';
import ResumePage from './pages/ResumePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
