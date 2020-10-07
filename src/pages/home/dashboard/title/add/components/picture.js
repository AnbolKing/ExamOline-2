import React from 'react';
import {
  Input,
  Upload,
  Button
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import './style.css';
const { TextArea } = Input;
const { Dragger } = Upload;
 
const Picture = () => {
  return (
    <div className="picture-container content-container">
      <div className="textarea-container">
        <TextArea
          placeholder="请输入题目题干"
          autoSize={{ minRows: 2, maxRows: 3 }}
        />  
      </div>
      <div className="upload-container">
        <Dragger
          name="picImg"
          multiple='true'
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击上传图片或将图片拖拽到此处</p>
          <p className="ant-upload-hint">Click or drag file to this area to upload</p>
        </Dragger>
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
export default Picture;