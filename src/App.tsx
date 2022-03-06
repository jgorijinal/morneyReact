import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Money from 'views/Money';
import Tags from 'views/Tags';
import Statistic from 'views/Statistic';
import NoMatch from 'views/NoMatch';

function App() {
  return (
    <Router>
          <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money" >
            <Money />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Redirect from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}



export default App;
