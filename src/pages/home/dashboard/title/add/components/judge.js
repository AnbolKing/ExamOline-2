import React from 'react';
import {
  Input,
  Checkbox,
  Button
} from 'antd';
import './style.css';
const { TextArea } = Input;
 
const Judge = () => {
  return (
    <div className="judge-container content-container">
      <div className="textarea-container">
        <TextArea
          placeholder="请输入题目题干"
          autoSize={{ minRows: 2, maxRows: 3 }}
        />  
      </div>
      <div className="check-container">
        <Checkbox.Group>
          <Checkbox value="correct">对</Checkbox>
          <Checkbox value="wrong">错</Checkbox>
        </Checkbox.Group>
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
export default Judge;