import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';

function Tags() {
  const {tags , setTags} = useTags()

  return (
    <Layout>
      <ol>
        {tags.map(tag => <li>{tag}</li>)}
      </ol>
    </Layout>
  )
}
export default Tags