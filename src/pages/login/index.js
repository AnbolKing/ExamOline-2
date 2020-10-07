import React, { Component } from 'react';
import { 
  Form,
  Input,
  Button,
 } from 'antd';
import './style.css';
import loginLogo from '../../assets/login-log.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Login extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      userpass:'',
    }
  }
  
  render() {
    const onFinish = (e) => {
      console.log(e);
      if(e.username!=='' && e.userpass!=='') {
        this.setState({
          username:e.username,
          userpass:e.userpass,
          isRemember:true
        })
      }
      else {
        this.setState({
          username:e.username,
          userpass:e.userpass,
          isRemember:false,
        })
      }
    }
    return (
      <div className="index-login">
        <div className="login-contain">
          <div className="content">
            <img src={loginLogo} alt=""/>
            <h1>iNCU-Exam for Ncuhomers</h1>
            <span className="wel-word">Welcome you gays!~</span>
            <Form
              className="login-form"
              name="login"
              onFinish={onFinish}
              //onFinishFailed={onFinishFailed}
            >
              <div className="input-box">
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input size="large" placeholder="请输入US账号" prefix={<UserOutlined />} className="login-input" />
              </Form.Item>
              <Form.Item
                name="userpass"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input.Password size="large" placeholder="请输入US账号密码" prefix={<LockOutlined />} className="login-input" />
              </Form.Item>
              </div>
              <Form.Item>
                <div className="button-box">
                  <Button type="primary" className="button" htmlType="submit">
                    <Link to='/home'>
                      登录
                    </Link>
                  </Button>
                  <Button type="default" className="button password-btn">
                    <a href="http://us.ncuos.com/user/login">
                      忘记密码
                    </a>
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;