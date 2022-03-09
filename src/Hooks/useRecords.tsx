import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  tagIds:number[],
  notes:string,
  category:('-'| '+'),
  amount:string,
  createdAt:string
}
type NewRecordItem = Omit<RecordItem, 'createdAt'>

const useRecords = ()=>{
  const [records , setRecords] = useState<RecordItem[]>([])

  const addRecord = (newRecord:NewRecordItem)=>{
    const record = {...newRecord , createdAt: (new Date()).toISOString() }
    setRecords([...records , record])
  }
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
  },[])

  useUpdate(()=>{
    window.localStorage.setItem('records' ,  JSON.stringify(records))
  }, records)
  return {
    records:records,
    setRecords:setRecords,
    addRecord:addRecord,
  }
}
export default useRecords