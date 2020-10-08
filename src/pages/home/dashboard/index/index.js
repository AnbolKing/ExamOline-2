import React, { useState } from 'react';
import './style.css';
import {
  Row,
  Col,
  Card,
  Divider, 
  Tag,
  Pagination
} from 'antd'; 
import ExamList from './data';

const Index = () => {
  const colorList = ['red','orange','blue'];
  const textList= ['未开始','进行中','已结束'];
  
  const [index,setIndex] = useState(1);
  const [list,setList] = useState(ExamList.slice(0,8));

  const handleChange = (number) => {
    setIndex(number);
    const res = ExamList.slice(
      number === 1 ? 0 : (number - 1) * 8 - 1,
      number === 1 ? 8 : number * 8 - 1
    );
    setList(res);
  }
  return (
    <div className="index-container">
      <div className="index-header">
        <Row gutter={48}>
          <Col span={6}>
            <Card hoverable title="添加题目" extra={<a href="/home/title/add">立即添加</a>}>
              <p>录入题目至题库，支持单个题目录入或从Excel导入</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable title="创建考试" extra={<a href="/home/exam/add">立即创建</a>}>
              <p>从题库抽取试题，创建试卷，并发布考试</p>
            </Card>
          </Col>
        </Row>
      </div>
      <Divider />
      <Card
        title={`所有考试（${ExamList.length}）`}
        style={{width:'100%'}}
      >
        {
          list&&list.map((item,key) => {
            return (
              <Card
                title={item.name}
                extra={
                <Tag color={colorList[item.status]}>{textList[item.status]}</Tag>
                }
                className='exam-item'
                hoverable
                key={key}
              >
                <p>{item.start}-{item.end}</p>
                <p>考试时长：{item.time} 考试人数：{item.number}</p>
              </Card>
            )
          })
        }
        <Pagination 
          defaultCurrent={1}
          current={index}
          pageSize={8}
          onChange={handleChange} 
          total={ExamList.length} 
          hideOnSinglePage
        />
      </Card>
    </div>
  )
};

export default Index;