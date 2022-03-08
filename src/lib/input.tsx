import Icon from '../components/Icon';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  padding: 0 16px;
  align-items: center;
  color: #d3d4d8;
  background: #24252c;

  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-right: 12px;

    > svg {
      width: 1.3em;
      margin-right: 4px;
    }
  }

  input {
    display: block;
    width: 100%;
    height: 72px;
    background: none;
    border: none;
    color: #d3d4d8;
  }
`
type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input:React.FC<Props> = (props)=>{
  const {label ,children,  ...rest} = props
  return (
    <Label>
      <span><Icon name="notes" />{props.label}</span>
      <input  {...rest}/>
    </Label>
    )
}
export default Input