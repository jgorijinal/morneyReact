import {useEffect, useState} from 'react';
import createId from 'lib/createId';
import {useUpdate} from './useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>( [] );

  useEffect(()=>{
    const  localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0 ) {
      setTags( [
        {id:createId() , name:'衣'},
        {id:createId() , name:'食'},
        {id:createId() , name:'住'},
        {id:createId() , name:'行'},
      ] )
    }else {
      setTags(localTags)
    }
  } , [])

  useUpdate(()=>{window.localStorage.setItem('tags' , JSON.stringify(tags))} , tags )

  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]  //在这里直接封装编辑标签时用到的函数
  const updateTag = (id:number , obj:{name:string})=>{
    setTags(tags.map(tag => tag.id === id ? {id: id, name: obj.name} : tag))
  }
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag => tag.id !== id))
  }
  const addTag = ()=>{
    const tagName = window.prompt('请输入您要添加的标签名')
    if (tagName !== null){
      setTags([...tags , {id:createId(),name:tagName }])
    }else{
      return
    }
  }
  const getName = (id:number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : '';
  }
  return {
    tags: tags,
    setTags: setTags,
    findTag : findTag,
    updateTag:updateTag,
    deleteTag:deleteTag,
    addTag:addTag,
    getName:getName
  };
};
export default useTags;