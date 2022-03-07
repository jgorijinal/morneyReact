import Layout from '../components/Layout';
import React from 'react';
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
function Money() {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  )
}
export default Money