import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #1e1f23;
  color: #9d9999;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;

  a {
    width: 33.3333333%;
    display: flex;
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 0;

    &.selected {
      color: white;
    }

    svg {
      margin-bottom: 4px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
          <NavLink to="/tags" activeClassName="selected"><Icon name={'biaoqian'}/>标签页</NavLink>
          <NavLink  to="/money" activeClassName="selected"><Icon name={'money'}/>记账页</NavLink>
          <NavLink  to="/statistic" activeClassName="selected"><Icon name={'liushui'}/>流水页</NavLink>
    </NavWrapper>
  );
};
export default Nav;