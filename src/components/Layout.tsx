import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background:#17181c ;
`
const Main = styled.main`
  //flex-grow: 1;
  height: 100%;
  overflow: auto;
`
const Layout = (props:any)=>{
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  )
}
export default  Layout