import {useState} from 'react';
import createId from 'lib/createId';


const defaultTags = [
  {id:createId() , name:'衣'},
  {id:createId() , name:'食'},
  {id:createId() , name:'住'},
  {id:createId() , name:'行'},
]
const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>( defaultTags );
  const findEditableTag = (id:number) => tags.filter(tag => tag.id === id)[0]  //在这里直接封装编辑标签时用到的函数
  return {
    tags: tags,
    setTags: setTags,
    findEditableTag : findEditableTag
  };
};
export default useTags;