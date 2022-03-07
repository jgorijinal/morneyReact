import styled from 'styled-components';
import Icon from '../../components/Icon';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

type Props ={
  value:string,
  onChange:(inputValue : string)=>void
}
const NoteSection :React.FC<Props>= (props)=>{
  const notes = props.value
  // const [note , setNote] = useState<string>('')      //数据!!!!! , 变得没用了
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur =()=>{
    if (refInput.current !== null){
      props.onChange(refInput.current.value)
    }
  }
  return(
    <Wrapper>
      <label>
        <span><Icon name="notes" />备注</span>
        <input type="text" placeholder={'在这里添加备注'} defaultValue={notes} onBlur={onBlur}  ref={refInput}/>
      </label>
    </Wrapper>
  )
}

export {NoteSection}