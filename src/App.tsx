import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from 'views/Money';
import Tags from 'views/Tags';
import Statistic from 'views/Statistic';
import NoMatch from 'views/NoMatch';
import Tag from 'views/Tag';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/tags" >
          <Tags/>
        </Route>
        <Route exact path="/tags/:tag">
          <Tag/>
        </Route>
        <Route exact path="/money" >
          <Money/>
        </Route>
        <Route exact path="/statistic">
          <Statistic/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*" >
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
