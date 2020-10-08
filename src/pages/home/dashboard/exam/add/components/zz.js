import React, { useState } from 'react';
import {
  Menu,
  Row,
  Col,
  Card,
  Statistic,
  Button
} from 'antd';
import {
  FontColorsOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  EditOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';
import Content from './zz-titles/content';

const ZZ = () => {
  const [index,setIndex] = useState('null')
  const handleMenuClick = (e) => {
    setIndex(e.key);
  }
  return (
    <>
      <Card>
        <Row>
          <Menu
            mode='horizontal'
            className='menu-container'
            style={{
              fontSize:'15px'
            }}
            onClick={handleMenuClick}
          >
            <Menu.Item key='xz'>选择题</Menu.Item>
            <Menu.Item key='tk'>填空题</Menu.Item>
            <Menu.Item key='wd'>问答题</Menu.Item>
            <Menu.Item key='zt'>作图题</Menu.Item>
            <Menu.Item key='pd'>判断题</Menu.Item>
          </Menu>
          <Col span={2} offset={6}>
            <Statistic title="选择题" value={2} prefix={<FontColorsOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="填空题" value={5} prefix={<ProfileOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="问答题" value={6} prefix={<QuestionCircleOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="作图题" value={9} prefix={<EditOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="判断题" value={20} prefix={<CheckSquareOutlined />} />
          </Col>
        </Row>
      </Card>
      <Content index={index}/>
      <Row style={{marginTop:'25px',display:'flex', justifyContent:'center'}}>
        <Button 
          type='primary' 
          shape='round'
          style={{
            width:'135px',
            height:'43px'
          }}
        >
          录入
        </Button>
      </Row>
    </>
  )
};
export default ZZ;