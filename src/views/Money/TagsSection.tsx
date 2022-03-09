import styled from 'styled-components';
import React from 'react';
import Icon from '../../components/Icon';
import useTags from '../../Hooks/useTags';

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

type Props = {
  value :number[],
  onChange:(newTagId:number[]) => void
}
const TagsSection:React.FC<Props> = (props)=>{
  const selectedTagIds = props.value
  const {tags , addTag} = useTags()
  const  onToggleTag =(tagId :number)=>{
    const index = selectedTagIds.indexOf(tagId)
    if(index >= 0){
      props.onChange(selectedTagIds.filter(t => t!== tagId))
    }else {
      props.onChange([...selectedTagIds , tagId])
    }
  }
  const getClass= (tagId:number)=> selectedTagIds.indexOf(tagId)>=0 ? 'selected': ''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={addTag}><Icon name="add" />新增标签</button>
    </Wrapper>
  )
}


export {TagsSection}