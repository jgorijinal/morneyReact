import styled from 'styled-components';

const CategorySection = styled.section`
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
export  {CategorySection}