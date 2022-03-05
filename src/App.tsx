import React from 'react';
import {HashRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';
import Layout from 'components/Layout';
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
function Statistic() {
  return (
   <Layout>
     <h2>统计页面</h2>
   </Layout>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  )
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}

export default App;
