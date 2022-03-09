import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
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
  const {tags,setTags ,findTag , updateTag ,deleteTag } = useTags()
  console.log(tags)
  const paramsId = useParams<Params>().id
  const editableTag = findTag( parseInt(paramsId) )
  const tagContent = (editableTag:{id:number,name:string})=>{
    return (
    <InputWrapper>
      <Input  type={"text"} label={'标签名'} placeholder={'请输入新的标签名:'}
              defaultValue={editableTag.name}
              onChange={(e)=>{updateTag(editableTag.id , {name:e.target.value})}}
      />
    </InputWrapper>
  )}
  const  history = useHistory()
  const onClickBack = ()=>{
    history.goBack()
  }
  return (
    <Layout>
      <TopBar>
        <Icon name={"left"} onClick={onClickBack}/>
        <span className={"text"}>编辑标签</span>
        <Button onClick={()=>{deleteTag(editableTag.id)}}>删除标签</Button>
      </TopBar>
      {editableTag ?  tagContent(editableTag) : <div>'tag已被删除'</div>}
    </Layout>
  )
}
export default Tag