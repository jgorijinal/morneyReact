import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(30, 29, 29, 0.91);
  color: #eae8e8;
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
    
    svg {
      margin-bottom: 4px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
          <Link  to="/tags"><Icon name={'biaoqian'}/>标签页</Link>
          <Link  to="/money"><Icon name={'money'}/>记账页</Link>
          <Link  to="/statistic"><Icon name={'liushui'}/>流水页</Link>
    </NavWrapper>
  );
};
export default Nav;