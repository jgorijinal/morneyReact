import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import useRecords, {RecordItem} from '../Hooks/useRecords';
import styled from 'styled-components';
import useTags from '../Hooks/useTags';
import day from 'dayjs';

const Wrapper = styled.div`
  color: #e0e1e5;
  font-size: 18px;

  > .date {
    padding: 10px 16px;
    background: #36363f;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  line-height: 20px;
  padding: 10px 16px;

  > .notes {
    margin-right: auto;
    color: #8c8d91;
    margin-left: 12px;
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
  const {records} = useRecords();
  const {getName} = useTags();
  const selectedRecords = records.filter(r => r.category === category);
  const hash: { [K: string]: RecordItem[] } = {};
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategorySection value={category} onChange={v => setCategory(v)}/>

      {array.map(([date, record] , index) => {
        return (
          <div key={index}>
            <Wrapper>
              <div className={'date'}>{date}</div>
              {record.map(r => {
                return <Item key={r.createdAt}>
                  <div className={'tags'}>
                    {r.tagIds.map(i => <span key={i}>{`${getName(i)} `}</span>)}
                  </div>
                  <div className={'notes'}>
                    {r.notes ? r.notes : '无备注'}
                  </div>
                  <div className={'amount'}>
                    {'￥' + parseFloat(r.amount)}
                  </div>
                </Item>;
              })}
            </Wrapper>
          </div>

        );
      })
      }
    </Layout>
  );
}

export default Statistic;