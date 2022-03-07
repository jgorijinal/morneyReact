import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
display:flex;
  flex-direction: column;
  justify-content: flex-end;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection>
        <div className={"output"}>100</div>
        <div className={'pad clearfix'}>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>del</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>C</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className={'ok'}>确定</button>
            <button>.</button>
            <button className={'zero'}>0</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  )
}
export default Money