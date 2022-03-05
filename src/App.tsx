import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Money from 'views/Money';
import Tags from 'views/Tags';
import Statistic from 'views/Statistic';

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
function NoMatch(){
  return (
    <div>
      {'页面不存在哦 , 你丫输入的什么鬼东西!'}
    </div>
  )
}


export default App;
