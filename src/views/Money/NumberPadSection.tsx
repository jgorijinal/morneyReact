import React from 'react';
import Wrapper from './NumberPadSection/Wrapper';
import generateOutput from './NumberPadSection/generateOutput';

type Props= {
  value :string,
  onChange:(amount:string)=>void,
  onOk?:()=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
  // const [output , _setOutput] = useState<string>('0')   //output设置成了string     数据!!!!!右边的没用了
  const output = props.value.toString()
  const setOutput = (output:string)=>{
    let value
    if(output.length > 16){
      value = output.slice(0,16)
    }else if(output.length === 0){
      value = '0'
    }else{
      value = output
    }
    props.onChange(value)
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if(text === null) return
    if (text === '确定') {
      if(props.onOk) {
        props.onOk()
      }

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