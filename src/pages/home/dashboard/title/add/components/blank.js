import React from 'react';
import {
  Input,
  Button,
  Row,
  Col
} from 'antd';
import './style.css';
const { TextArea } = Input;
 
const Blank = () => {
  return (
    <div className="blank-container content-container">
      <div className="textarea-container">
        <TextArea
          placeholder="请输入题目题干"
          autoSize={{ minRows: 2, maxRows: 3 }}
        />  
      </div>
      <div className="answer-container">
        <TextArea placeholder='答案一' autoSize className='answer-item'/>
        <TextArea placeholder='答案二' autoSize className='answer-item'/>
      </div>
      <div className="button-container">
        <Row>
          <Col span={4}>
            <Button 
              type='primary' 
              shape='round'
              style={{
                width:'135px',
                height:'43px'
              }}
            >
              添加答案
            </Button>
          </Col>
          <Col span={4}>
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
          </Col>
        </Row>
      </div>
    </div>
  )
};
export default Blank;