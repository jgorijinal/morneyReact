import {useState} from 'react';
import createId from 'lib/createId';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(    //tags :[ { id:1 , name:'标签' },.... ]
    [
      {id:createId() , name:'衣'},
      {id:createId() , name:'食'},
      {id:createId() , name:'住'},
      {id:createId() , name:'行'},
    ]);
  return {
    tags: tags,
    setTags: setTags
  };
};
export default useTags;