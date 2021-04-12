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
      timerId: null,
      canRun: false,
    }
    this.ref = React.createRef();
  }

  ajax = (content) => {
    console.log(content);
  }

  ajaxTwo = () => {
    console.log(123);
  }

  debounce = (fn, delay) => {
    return (...rest) => {
      let args = rest;
      if(this.state.timerId) {
        clearTimeout(this.state.timerId);
      }
      // eslint-disable-next-line
      this.state.timerId = setTimeout(() => {
        fn.apply(this, args);
      }, delay)
    }
  }

  throttle = (fn, delay) => {
    this.setState(() => ({
      canRun: true,
    }))
    return (...rest) => {
      if (!this.state.canRun) return;
      this.setState(() => ({
        canRun: false,
      }))
      setTimeout(() => {
        fn.apply(this, rest);
        this.setState(() => ({
          canRun: true,
        }))
      }, delay)
    }
  }

  debounceInput = (e) => {
    let debounceAjax = this.debounce(this.ajax, 1000);
    debounceAjax(e.target.value);
  }
  
  throttleMouse = (fn, delay) => {
    var prev = Date.now();
    return function() {
        var context = this;
        var args = arguments;
        var now = Date.now();
        if (now - prev >= delay) {
            fn.apply(context, args);
            prev = Date.now();
        }
    }
  }

  componentDidMount() {
    let body = document.getElementsByTagName('body')[0];
    console.log(body);
    body.addEventListener('mousemove', this.throttleMouse(this.ajaxTwo, 2000))
  }
  
  render() {
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
              initialValues={{
                remember: true,
              }}
            >
              <div className="input-box">
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input size="large" placeholder="请输入US账号" prefix={<UserOutlined />} className="login-input" onChange={this.debounceInput}/>
              </Form.Item>
              <Form.Item
                name="userpass"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input.Password size="large" placeholder="请输入US账号密码" prefix={<LockOutlined />} className="login-input"/>
              </Form.Item>
              </div>
              <Form.Item>
                <div className="button-box">
                  <Button type="primary" className="button" htmlType="submit" ref={this.ref} >
                    <Link to='/login'>
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