import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
      transition: all 0.2s;
      font-size: 18px;
      color: #e1e1e3;
      border-radius: 4px;
      width: 25%;
      height: 64px;
      border: 1px solid #1f1f21;
      background: #39393b;
      float: left;

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

    button:active {
      background: #6f6f72;
    }
  }
`;


const NumberPadSection: React.FC = (props) => {

  const [output , setOutput] = useState<string>('0')   //output 设置成了string
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null) return
    switch (text) {
      case '0' :
      case '1' :
      case '2' :
      case '3' :
      case '4' :
      case '5' :
      case '6' :
      case '7' :
      case '8' :
      case '9' :
      case '.' :
        if(output === '0'){
          setOutput(text)
        }else {
          setOutput(output + text)
        }
        break
      case 'del' :
        console.log('删除')
        break
      case 'C' :
        console.log('清空')
        break
      case '确定' :
        console.log('确定')
        break
    }
  };
  return (
    <Wrapper>
      <div className={'output'}>{output}</div>
      <div className={'pad clearfix'} onClick={onClickButtonWrapper}>
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
    </Wrapper>
  );
};

export {NumberPadSection};