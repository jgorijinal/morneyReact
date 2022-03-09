import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import useRecords from '../Hooks/useRecords';
import styled from 'styled-components';
import useTags from '../Hooks/useTags';
import day from 'dayjs';

const Wrapper = styled.div`
  color: #e0e1e5;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .notes {
    margin-right: auto;
    color: #8c8d91;
    margin-left:12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .amount {
    white-space: nowrap;
  }
`;

function Statistic() {
  const [category, setCategory] = useState<('-' | '+')>('-');
  const {records, setRecords} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategorySection value={category} onChange={v => setCategory(v)}/>

      <Wrapper>
        {records.map(r => {
          return <Item key={r.amount}>
            <div className={'tags'}>
              {r.tagIds.map(i => <span key={i}>{`${getName(i)} `}</span>)}
            </div>
            <div className={'notes'}>
              {r.notes ? r.notes : '无备注'}
            </div>
            <div className={'amount'}>
              { '￥'+parseFloat(r.amount)}
            </div>
            {/*时间: {day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </Wrapper>
    </Layout>
  );
}

export default Statistic;