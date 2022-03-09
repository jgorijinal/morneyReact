import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import Input from '../../lib/input';
const Wrapper = styled.section`
  border-bottom: 1px solid #26272b;
`
type Props ={
  value:string,
  onChange:(inputValue : string)=>void
}
const NoteSection :React.FC<Props>= (props)=>{
  const notes = props.value
  // const [note , setNote] = useState<string>('')      //数据!!!!! , 变得没用了
  const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
      props.onChange(e.target.value)
  }
  return(
    <Wrapper>
      <Input label={'备注'}  type="text" placeholder={'请输入备注:'} value={notes}  onChange={onChange}/>
    </Wrapper>
  )
}

export {NoteSection}