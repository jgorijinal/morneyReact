import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`
function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
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
function Statistic() {
  return <h2>统计</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

export default App;
