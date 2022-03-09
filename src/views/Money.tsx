import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {NoteSection} from './Money/NoteSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white; ///////////////////////////////////
`
function Money() {
const [selected , setSelected] = useState({
  tagIds :[] as number[],
  notes:'',
  category:'-' as ('-' | '+'),
  amount:'0'
})
  const onChange = (obj:Partial< typeof selected>) =>{  //封装onChange函数
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds)=>onChange({tagIds:tagIds})}
      />
      <NoteSection  value={selected.notes}
                   onChange={(notes)=>onChange( {notes :notes} )}
                     />
      <CategorySection  value={selected.category}
                        onChange={(category)=>onChange( {category :category} )}
                          />
      <NumberPadSection  value={selected.amount.toString()}
                         onChange={(amount)=>onChange( {amount :amount} )}
                         onOk={()=>{}}
      />
    </MyLayout>
  )
}
export default Money