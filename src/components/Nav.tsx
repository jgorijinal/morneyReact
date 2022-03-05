import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(35, 34, 34, 0.91);
  color: #eae8e8;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  > ul {
    display: flex;

    & li {
      width: 33.3333333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
    }
  }
`

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistic">流水页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav