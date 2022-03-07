import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
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
      &.selected{
        background:#6ec5bd ;
        color: black;
      }
    }
  }

  button {display: flex;align-items: center;background: none;
    border: none;color: #d3d4d8;cursor: pointer;margin-top:8px;
    > svg {width: 1.5em;margin-right: 4px;}
    padding: 2px 4px;border-bottom: 1px solid #6d6e73;}
`
const TagsSection:React.FunctionComponent = ()=>{
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags ,setSelectedTags] =useState<string[]>([])
  const  onToggleTag =(tag :string)=>{
    const index = selectedTags.indexOf(tag)
    if(index >= 0){    //存在的话
      setSelectedTags(selectedTags.filter(t => t!== tag)) //用filter返回没有选中的作为新的数组
    }else {
      setSelectedTags([...selectedTags , tag])
    }
  }
  const onAddTag = ()=>{
    const tagName = window.prompt('请输入你要添加的标签')
    if (tagName !== null){
      setTags([...tags , tagName])
    }else{
      return
    }
  }
  const getClass= (tag:string)=> selectedTags.indexOf(tag)>=0 ? 'selected': ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag} onClick={()=>onToggleTag(tag)} className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}><Icon name="add" />新增标签</button>
    </Wrapper>
  )
}


export {TagsSection}