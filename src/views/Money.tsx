import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
  background: #17181c;
  padding: 12px 16px;
  ol {margin: 0 -12px;
    li {
      display: inline-block;color: #d3d4d8;
      background: #36363f;font-size: 14px;margin: 8px 12px;
      padding: 3px 18px;border-radius: 18px;cursor: pointer;
    }
  }

  button {display: flex;align-items: center;background: none;
    border: none;color: #d3d4d8;cursor: pointer;margin-top:8px;
    > svg {width: 1.5em;margin-right: 4px;}
    padding: 2px 4px;border-bottom: 1px solid #6d6e73;}
`
const NotesSection = styled.section`
  border-bottom: 1px solid #26272b;
  label {
    display: flex;padding: 0 16px;align-items: center;
    color:#d3d4d8;background:  #17181c ;
    span {display: flex;align-items: center;white-space: nowrap;
      margin-right:12px ;
      >svg {width: 1.3em;margin-right:4px ;
      }
    }
    input {display: block;width: 100%;height: 72px;
      background: none;border: none;color:#d3d4d8;
    }
  }
`
const CategorySection = styled.section`
  background: #17181c ;
  border-bottom: 1px solid #26272b;
 >ol {
   display: flex;

   > li {
     width: 50%;
     text-align: center;
     font-size: 24px;
     padding: 16px 0;
     color: #d3d4d8;
     &.selected {
       position: relative;  
       &::after{
         content: '';
         position:absolute;
         display: block;
         width: 100%;
         background: #d3d4d8;
         height: 3px;
         left:0;
         bottom: 0;
       } 
     }
   }
 }
`
const NumberPadSection = styled.section `

`
function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <li>衣</li>
          <li>食奥术大师多多</li>
          <li>住</li>
        </ol>
        <button><Icon name="add"></Icon>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span><Icon name="notes"></Icon>备注</span>
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
        <div></div>
        <div>
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
          <button>确定</button>
          <button>.</button>
          <button>0</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}
export default Money