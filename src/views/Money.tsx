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
// type Selected ={
//   tags:string[],
//   notes:string ,
//   category:('-' | '+'),
//   amount:string
// }
function Money() {
const [selected , setSelected] = useState({
  tags :[] as string[],
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
      {selected.tags.join(',')}
      {selected.notes}
      {selected.category}
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags)=>onChange({tags:tags})}
                   // onChange={ (tags)=>setSelected({
                   //        ...selected,
                   //   tags:tags})}
      />
      <NoteSection  value={selected.notes}
                   onChange={(notes)=>onChange( {notes :notes} )}
                    // onChange={(notes)=>setSelected({
                    //       ...selected,
                    //   notes:notes}
                     />
      <CategorySection  value={selected.category}
                        onChange={(category)=>onChange( {category :category} )}
                        // onChange={(category)=>{setSelected({
                        //   ...selected,
                        //   category:category
                        // }) } }
                          />
      <NumberPadSection  value={selected.amount.toString()}
                         onChange={(amount)=>onChange( {amount :amount} )}
                         onOk={()=>{}}
                         // onChange={(amount)=>{setSelected({
                         //   ...selected,
                         //   amount:amount
                         // })}}
      />
    </MyLayout>
  )
}
export default Money