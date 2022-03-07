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
`
type Selected ={
  tags:string[],
  notes:string ,
  category:('-' | '+'),
  amount:string
}
function Money() {
const [selected , setSelected] = useState<Selected>({
  tags :[],
  notes:'',
  category:'-',
  amount:'0'
})
  return (
    <MyLayout>
      {selected.tags.join(',')}
      {selected.notes}
      {selected.category}
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={ (tags)=>setSelected({
                          ...selected,
                     tags:tags
      })}/>
      <NoteSection  value={selected.notes}
                    onChange={(notes)=>setSelected({
                          ...selected,
                      notes:notes
      })}/>
      <CategorySection  value={selected.category}
                        onChange={(category)=>{setSelected({
                          ...selected,
                          category:category
                        }) } }/>
      <NumberPadSection  value={selected.amount.toString()}
                         onChange={(amount)=>{setSelected({
                           ...selected,
                           amount:amount
                         })}}
                         onOk={()=>{}}
      />
    </MyLayout>
  )
}
export default Money