import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #17181c ;
  border-bottom: 1px solid #26272b;
 >ol {
   display: flex;
   > li {
     width: 50%;
     text-align: center;
     font-size: 24px;
     padding: 16px 0;
     color: #d3d4d8;
     transition: all 0.2s;
     &.selected {
       position: relative;  
       &::after{
         content: '';
         position:absolute;
         display: block;
         width: 100%;
         background: #d3d4d8;
         height: 3px;
         left:0;
         bottom: 0;
       } 
     }
   }
 }
`
const CategorySection :React.FC= (props)=>{
  const categoryMap = {'+':'收入' , '-':'支出'}
  // type X = typeof categoryMap
  // type Y = keyof X
  type Keys = keyof typeof categoryMap  //上面的简写
  const [category , setCategory] = useState('-')
  const [categoryList] = useState<(Keys)[]>(['-','+'])
  return (
    <Wrapper>
      <ol>
        {categoryList.map(c => <li key={c}
                                   onClick={()=>setCategory(c)}
                                   className={category === c ? 'selected' : ''}
        >{categoryMap[c]}</li>)}
      </ol>
    </Wrapper>
  )
}




export  {CategorySection}