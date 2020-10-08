import React, { useState } from 'react';
import {
  Card,
  Row,
  Menu, 
  Col,
  Button,
} from 'antd';
import {
  LeftOutlined,
  EditOutlined,
  ToolOutlined,
  FilePdfOutlined
} from '@ant-design/icons';
import { useHistory }  from 'react-router-dom';
import TK from './components/tk';
import FJ from './components/fj';
import ZZ from './components/zz';

const AddExam = () => {
  const [index,setIndex] = useState(1);
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  const handleMenuClick = (e) => {
    if(e.key === 'tk') {
      setIndex(1);
    }
    if(e.key === 'zz') {
      setIndex(2);
    }
    if(e.key === 'fj') {
      setIndex(3);
    }
  };
  return (
    <div className="addexam-container">
      <Card>
        <Row>
          <Menu
            mode='horizontal'
            className='menu-container'
            style={{
              fontSize:'17px'
            }}
            onClick={handleMenuClick}
            
          >
            <Menu.Item key='tk' icon={<EditOutlined />}>题库自动选题</Menu.Item>
            <Menu.Item key='zz' icon={<ToolOutlined />}>题库自主选题</Menu.Item>
            <Menu.Item key='fj' icon={<FilePdfOutlined />}>提交试卷附件</Menu.Item>
          </Menu>
          <Col offset={4} span={4}>
            <Button type="default" icon={<LeftOutlined />} size={'large'} shape={'round'} onClick={handleBack}>
              返回
            </Button>
          </Col>
        </Row>
      </Card>
      {
        index===1 ? (<TK />) : 
           (index===2 ? <ZZ /> : <FJ />)
      }
    </div>
  )
};

export default AddExam;