import { Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { Component } from 'react';
import IndexPage from './pages/IndexPage';
import Layout from './Layout';
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
        <Layout>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
