import React from 'react';
import { 
  Input,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.less';

const Test = () => {
  return (
    <div className="login-container">
      <div className="login-title">
        欢迎来打U Share
      </div>
      <div className="login-form">
        <div className="login-phone">
          <Input placeholder="请输入手机号" prefix={<UserOutlined />} />
        </div>
        <div className="login-pass">
          <Input placeholder="请输入验证码"prefix={<UserOutlined />} />
        </div>
      </div>
    </div>
  )
}

export default Test