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
    <div className="choose-container content-container">
      <div className="textarea-container">
      <TextArea
        placeholder="请输入题目题干"
        autoSize={{ minRows: 2, maxRows: 3 }}
      />
      </div>
      <div className="check-container">
        <Checkbox.Group>
          <div className="check-item">
            <Checkbox value="correct">A</Checkbox>
            <TextArea placeholder="请输入A选项内容" autoSize/>
          </div>
          <div className="check-item">
            <Checkbox value="correct">B</Checkbox>
            <TextArea placeholder="请输入B选项内容" autoSize/>
          </div>
          <div className="check-item">
            <Checkbox value="correct">C</Checkbox>
            <TextArea placeholder="请输入C选项内容" autoSize/>
          </div>
          <div className="check-item">
            <Checkbox value="correct">D</Checkbox>
            <TextArea placeholder="请输入D选项内容" autoSize/>
          </div>
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