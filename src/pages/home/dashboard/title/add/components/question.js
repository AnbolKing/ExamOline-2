import React from 'react';
import {
  Input,
  Button
} from 'antd';
import './style.css';
const { TextArea } = Input;
 
const Question = () => {
  return (
    <div className="question-container content-container">
      <div className="textarea-container">
        <TextArea
          placeholder="请输入题目题干"
          autoSize={{ minRows: 2, maxRows: 3 }}
        />  
      </div>
      <div className="textarea-container">
        <TextArea
          placeholder="请输入答案"
          autoSize={{ minRows: 2, maxRows: 3 }}
        />  
      </div>
      <div className="button-container">
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
      </div>
    </div>
  )
};
export default Question;