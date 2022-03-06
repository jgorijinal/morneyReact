import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
  display: flex;
  flex-direction: column;

  .output {
    background: #17181c;
    color: #6ec5bd;
    font-size: 40px;
    line-height: 72px;
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
  }

  .pad {
    background: #39393b;

    button {
      font-size: 18px;
      color: #e1e1e3;
      border-radius: 4px;
      width: 25%;
      height: 64px;
      border: 1px solid #1f1f21;
      background: #39393b;
      float: left;

      &:active {
        background: #484849;
      }

      &.ok {
        float: right;
        height: 128px;
        background: linear-gradient(to right, #e1b187, orange);
        color: white;

        &:active {
          background: #c5891a;
        }
      }

      &.zero {
        width: 50%;
      }

      &:first-child, &:nth-child(5), &:nth-child(9), &:nth-child(13) {
        background: #38383a;
      }

      &:nth-child(2), &:nth-child(6), &:nth-child(10), &:nth-child(14) {
        background: #3f3f42;
      }

      &:nth-child(3), &:nth-child(7), &:nth-child(11) {
        background: #444448;
      }

      &:nth-child(4), &:nth-child(8) {
        background: #444448;
      }
    }

  }
`

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