import Layout from '../components/Layout';
import React from 'react';
import useTags from '../Hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import Button from '../lib/Button';

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
const Center = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id}>
              <span className={'oneLine'}>{tag.name}</span>
              <Icon name={'right'}/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;