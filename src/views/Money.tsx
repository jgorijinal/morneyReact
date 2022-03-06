import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {TagsSection} from './Money/TagsSection';
import {NotesSection} from './Money/NotesSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
display:flex;
  flex-direction: column;
  justify-content: flex-end;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食奥术大师多多</li>
          <li>住</li>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li> <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li> <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li> <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
        </ol>
        <button><Icon name="add" />新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span><Icon name="notes" />备注</span>
          <input type="text" placeholder={'在这里添加备注'}/>
        </label>
      </NotesSection>
      <CategorySection>
        <ol>
          <li className={"selected"}>支出</li>
          <li>收入</li>
        </ol>
      </CategorySection>
      <NumberPadSection>
        <div className={"output"}>100</div>
        <div className={'pad clearfix'}>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>del</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>C</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className={'ok'}>确定</button>
            <button>.</button>
            <button className={'zero'}>0</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  )
}
export default Money