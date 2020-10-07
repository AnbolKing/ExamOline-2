import React from 'react';
import {
  Row,
  Col,
  Button,
  Input,
  Card,
} from 'antd';
import {
  PlusOutlined,
  EyeOutlined 
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header-container'>
      <Card>
        <Row>
          <Col span={4}>
            <Link to='/home/title/look'>
              <Button 
                type="primary" 
                icon={<EyeOutlined  />} 
                size={'large'} 
                shape={'round'}
              >
                查看题目
              </Button>
            </Link>
          </Col>
          <Col span={4}>
            <Link to='/home/title/add'>
              <Button 
                type="primary" 
                icon={<PlusOutlined />} 
                size={'large'} 
                shape={'round'}
              >
                添加题目
              </Button>
            </Link>
          </Col>
          <Col span={6} offset={10}>
            <Input.Search
                style={{ width: 300 }}
                placeholder="输入关键词检索题目"
                onSearch={(value) => console.log(value)}
                enterButton
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
};

export default Header;