import React, { useState } from 'react';
import {
  Table,
  Pagination,
  Card
} from 'antd';
import { data } from './data';

const Title = () => {
  const column = [
    {
      title:'题型',
      dataIndex:'type',
      key:'type',
    },
    {
      title:'内容',
      dataIndex:'content',
      key:'content',
    },
    {
      title:'平均用时',
      dataIndex:'time',
      key:'time',
    },
    {
      title:'作答人数',
      dataIndex:'answer',
      key:'answer',
    },
    {
      title:'弃答人数',
      dataIndex:'giveUp',
      key:'giveUp',
    },
    {
      title:'正确人数',
      dataIndex:'correct',
      key:'correct',
    },
    {
      title:'正确率',
      dataIndex:'percent',
      key:'percent',
    }
  ];
  const [index, setIndex] = useState(1);
  const [list,setList] = useState(data.slice(0,5));

  const handleChange = (number) => {
    setIndex(number);
    const res = data.slice(
      number === 1 ? 0 : (number - 1) * 5,
      number === 1 ? 5 : number * 5
    )
    setList(res);
  }
  return (
    <div className="title-container">
      <Card>
        <Table 
          columns={column} 
          dataSource={list}
          pagination={false}
        />
        <Pagination 
          defaultCurrent={1}
          current={index}
          pageSize={5}
          onChange={handleChange}
          hideOnSinglePage
          total={data.length}
          style={{
            marginTop:'20px'
          }}
        />
      </Card>
    </div>
  )
};

export default Title;