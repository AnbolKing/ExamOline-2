import React, { useState } from 'react';
import {
  Card,
  Dropdown,
  Menu,
  Button,
  Row,
  Col,
  Tag
} from 'antd';
import {
  DownOutlined
} from '@ant-design/icons';
import './style.css';

const AddTitle = () => {
  const classType = ['请选择组别','研发组','产品组','设计组','运营组','行政组'];
  const titleType = ['请选择题型','选择题','填空题','问答题','作图题','判断题'];
  const [classIndex,setClass] = useState(0);
  const [titleIndex,setTitle] = useState(0)
  return (
    <div className="addtitle-container">
      <Card>
        <Row>
          <Col span={4}>
            <Dropdown overlay={
              <Menu onClick={(e) => { setClass(parseInt(e.key)) }}>
                <Menu.Item key="1" icon={null}>
                  研发组
                </Menu.Item>
                <Menu.Item key="2" icon={null}>
                  产品组
                </Menu.Item>
                <Menu.Item key="3" icon={null}>
                  设计组
                </Menu.Item>
                <Menu.Item key="4" icon={null}>
                  运营组
                </Menu.Item>
                <Menu.Item key="5" icon={null}>
                  行政组
                </Menu.Item>
              </Menu>}
              >
                <Button 
                  type='default' 
                  shape='round'
                  style={{
                    width:'135px',
                    height:'43px'
                  }}
                >
                  {classType[classIndex]} <DownOutlined />
                </Button>
            </Dropdown>
          </Col>
          <Col span={4}>
            <Dropdown overlay={
              <Menu onClick={(e) => { setTitle(parseInt(e.key)) }}>
                <Menu.Item key="1" icon={null}>
                  选择题
                </Menu.Item>
                <Menu.Item key="2" icon={null}>
                  填空题
                </Menu.Item>
                <Menu.Item key="3" icon={null}>
                  问答题
                </Menu.Item>
                <Menu.Item key="4" icon={null}>
                  作图题
                </Menu.Item>
                <Menu.Item key="5" icon={null}>
                  判断题
                </Menu.Item>
              </Menu>}
            >
              <Button 
                type='default' 
                shape='round'
                style={{
                  width:'135px',
                  height:'43px'
                }}
              >
                {titleType[titleIndex]} <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
          <Col span={6} offset={10}>
            <Tag color="error">难度较高 8</Tag>
            <Tag color="processing">有点难度 13</Tag>
            <Tag color="success">还挺简单 20</Tag>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default AddTitle;