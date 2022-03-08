import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  background: #17181c;

  > li {
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1e1f23;
      color: #d3d4d8;
      font-size: 16px;
      border-bottom: 1px solid #434448;
      padding: 12px 16px;

      &:active {
        background: #2c2d33;
      }

      > svg {
        width: 1.5em;
      }
    }
  }
`;
const Button = styled.button`
  border: none;
  background: linear-gradient(to right, #e1b187, orange);
  font-size: 16px;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;

  &:active {
    background: #c0973e;
  }
`;
const Center = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'/tags/'+tag}>
              <span className={'oneLine'}>{tag}</span>
              <Icon name={'right'}/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;