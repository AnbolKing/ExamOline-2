import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Pagination
} from 'antd';
import {
  LeftOutlined,
  ZoomInOutlined,
  PieChartOutlined 
} from '@ant-design/icons';
import { Link, useHistory }  from 'react-router-dom';
import data from './data';

const Class = () => {
  const column = [
    {
      title:'姓名',
      dataIndex:'name',
      key:'name',
    },
    {
      title:'考试分数',
      dataIndex:'grade',
      key:'grade',
    },
    {
      title:'考试结果',
      dataIndex:'result',
      key:'result',
    },
    {
      title:'切屏次数',
      dataIndex:'screen',
      key:'screen',
    },
    {
      title:'批改状态',
      dataIndex:'current',
      key:'current',
    },
    {
      title:'查看考生试卷',
      dataIndex:'look',
      key:'look',
      render: text => <Link to='/home/exam/info'>{text}</Link>,
    },
    {
      title:'批改试卷',
      dataIndex:'judge',
      key:'judge',
      render: text => <Link to='/home/exam/correct'>{text}</Link>,
    }
  ];

  const [index, setIndex] = useState(1);
  const [list,setList] = useState(data.slice(0,5));
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  const handleChange = (number) => {
    setIndex(number);
    const res = data.slice(
      number === 1 ? 0 : (number - 1) * 5,
      number === 1 ? 5 : number * 5
    )
    setList(res);
  }
  return (
    <div className="classexam-container">
      <Card>
        <Row>
          <Col span={4}>
            <Button type="default" icon={<LeftOutlined />} size={'large'} shape={'round'} onClick={handleBack}>
              返回
            </Button>
          </Col>
          <Col span={4}>
            <Button type="default" icon={<ZoomInOutlined />} size={'large'} shape={'round'}>
              我的任务
            </Button>
          </Col>
          <Col span={4}>
            <Button type="default" icon={<PieChartOutlined />} size={'large'} shape={'round'}>
              分配阅卷
            </Button>
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

export default Class;