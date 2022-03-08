import React from 'react';
import {useParams} from 'react-router-dom';
import useTags from '../useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Button from '../lib/Button';
import styled from 'styled-components';
import Input from '../lib/input';

type Params = {
  id:string
}
const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#d3d4d8;
  padding: 8px 16px;
  position: relative;
  background: #1e1f23;
  >.text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  >svg{
    width:1.5em;
  }
`
const InputWrapper = styled.div`
margin-top: 16px;
`
const Tag:React.FC = ()=>{
  const {tags,setTags ,findEditableTag} = useTags()
  console.log(tags)
  const paramsId = useParams<Params>().id
  const editableTag = findEditableTag( parseInt(paramsId) )
  return (
    <Layout>
      <TopBar>
        <Icon name={"left"} />
        <span className={"text"}>编辑标签</span>
        <Button>删除标签</Button>
      </TopBar>
      <InputWrapper>
        <Input  type={"text"} label={'标签名'} placeholder={'请输入新的标签名:'} defaultValue={editableTag.name}/>
      </InputWrapper>

    </Layout>
  )
}
export default Tag