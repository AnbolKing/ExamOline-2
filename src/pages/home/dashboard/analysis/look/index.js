import React, { useState } from 'react';
import {
  Card,
  Button,
  Input,
  Table,
  Row,
  Col,
  Pagination
} from 'antd';
import {
  EditOutlined ,
} from '@ant-design/icons';
import data from '../../exam/data';
import { Link } from 'react-router-dom';

const LookAnalysis = () => {
  const column = [
    {
      title:'名称',
      dataIndex:'name',
      key:'name',
      render: text => <Link to='/home/analysis/show'>{text}</Link>,
    },
    {
      title:'创建人',
      dataIndex:'create',
      key:'create',
    },
    {
      title:'开始时间',
      dataIndex:'start',
      key:'start',
    },
    {
      title:'结束时间',
      dataIndex:'end',
      key:'end',
    },
    {
      title:'考试时长',
      dataIndex:'time',
      key:'time',
    },
    {
      title:'创建时间',
      dataIndex:'createTime',
      key:'createTime',
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
    <div className="analysis-container">
      <Card>
        <Row>
          <Col span={6}>
            <Link to='/home/exam'>
              <Button type="primary" icon={<EditOutlined  />} size={'large'} shape={'round'}>
                批改试卷
              </Button>
            </Link>
          </Col>
          <Col span={6} offset={12}>
            <Input.Search
                style={{ width: 300 }}
                placeholder="输入关键词检索题目"
                onSearch={(value) => console.log(value)}
                enterButton
            />
          </Col>
        </Row>
      </Card>
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

export default LookAnalysis;