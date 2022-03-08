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
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]  //在这里直接封装编辑标签时用到的函数
  const findTagIndex = (id:number)=>{
    let result = -1
    for(let i = 0;i<tags.length;i++){
      if(tags[i].id === id){
        result = i
        break
      }
    }
    return result
  }
  const updateTag = (id:number , obj:{name:string})=>{
    const index = findTagIndex(id)     //获取我要改的tag的下标
    let tagsClone = JSON.parse(JSON.stringify(tags))   //clone原来的tags , 因为数据不可变原则, 弄一个新的
    tagsClone.splice(index , 1 , {id:id, name: obj.name})  //删除指定tag , 在添加新的tag
    setTags(tagsClone)
  }
  const deleteTag = (id:number)=>{
    const index = findTagIndex(id)     //获取我要删除的tag的下标
    let tagsClone = JSON.parse(JSON.stringify(tags))   //clone原来的tags , 因为数据不可变原则, 弄一个新的
    tagsClone.splice(index , 1 )  //删除指定tag
    setTags(tagsClone)
  }
  return {
    tags: tags,
    setTags: setTags,
    findTag : findTag,
    updateTag:updateTag,
    deleteTag:deleteTag
  };
};
export default useTags;