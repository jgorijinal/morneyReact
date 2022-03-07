import React, {useState} from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

const NumberPadSection: React.FC = (props) => {
  const [output , _setOutput] = useState<string>('0')   //output设置成了string
  const setOutput = (output:string)=>{  //再封装_setOutput , 改正真正有用的setOutput
    if(output.length > 16){
      return
    }else if(output.length === 0){
      output = '0'
    }
    _setOutput(output)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null) return
    if (text === '确定') {
      //ToDO
      return
    }
    if('1234567890.'.split('').concat(['del','C']).indexOf(text) >=0) {
      setOutput(generateOutput( text , output))
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