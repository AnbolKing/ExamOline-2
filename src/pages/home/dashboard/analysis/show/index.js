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
  LeftOutlined,
  TeamOutlined,
  UserSwitchOutlined,
  EditOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  CheckSquareOutlined
} from '@ant-design/icons';
import {
  useHistory,
} from 'react-router-dom';
import './style.css';
import Chart from './components/chart';
import Title from './components/title';

const ShowAnalysis = () => {
  const [index,setIndex] = useState('result');
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  const handleMenuClick = (e) => {
    setIndex(e.key);
  }
  return (
    <div className="show-container">
      <Card>
        <Row>
          <Col span={3}>
            <Button type="default" icon={<LeftOutlined />} size={'large'} shape={'round'} onClick={handleBack}>
              返回
            </Button>
          </Col>
          <Menu
            mode='horizontal'
            className='menu-container'
            style={{
              fontSize:'17px'
            }}
            onClick={handleMenuClick}
          >
            <Menu.Item key='result'>图表分析</Menu.Item>
            <Menu.Item key='title'>题目分析</Menu.Item>
          </Menu>
          <Col span={2} offset={4}>
            <Statistic title="组别" value={'研发组'} prefix={<TeamOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="应到人数" value={60} prefix={<UserSwitchOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="参与人数" value={44} prefix={<EditOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="应考率" value={'73.3%'} prefix={<BarChartOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="平均分" value={53} prefix={<CheckSquareOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="考试日期" value={'2020/10/16'} prefix={<ClockCircleOutlined />} />
          </Col>
        </Row>
      </Card>
      <Card>
        {
          index==='result' ? (<Chart />) : (<Title />) 
        }
      </Card>
    </div>
  )
}

export default ShowAnalysis;