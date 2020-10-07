import React, { useState } from 'react';
import './style.css';
import {
  Card,
  Menu,
  Row,
  Empty
} from 'antd';
import {
  FileOutlined,
  WechatOutlined,
  AlertOutlined,
  HighlightOutlined,
  ToolOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const LookTitle = () => {
  const [questionList, setQuestionList] = useState([]);

  const handleClick = (e) => {
    console.log(e);
    setQuestionList([
      {
        type: "简答题",
        question: "你吃饭了吗",
        uploader: "Viki",
        time: "2020/9/26",
        answer: "吃了",
      },
      {
        type: "简答题",
        question: "你吃饭了吗",
        uploader: "Viki",
        time: "2020/9/26",
        answer: "吃了",
      },
    ])
  };
  return (
    <>
      <Card>
          <Row>
            <Menu 
              mode="horizontal" 
              className="menu-container"
              onClick={handleClick}
            >
              <SubMenu className='submenu-container' key="xz" icon={<FileOutlined />} title="行政组">
                <Menu.Item key="xz_1">主观题</Menu.Item>
                <Menu.Item key="xz_2">选择题</Menu.Item>
              </SubMenu>
              <SubMenu className='submenu-container' key="yy" icon={<WechatOutlined />} title="运营组">
                <Menu.Item key="yy_1">主观题</Menu.Item>
                <Menu.Item key="yy_2">选择题</Menu.Item>
              </SubMenu>
              <SubMenu className='submenu-container' key="cp" icon={<AlertOutlined />} title="产品组">
                <Menu.Item key="cp_1">主观题</Menu.Item>
                <Menu.Item key="cp_2">选择题</Menu.Item>
              </SubMenu>
              <SubMenu className='submenu-container' key="sj" icon={<HighlightOutlined />} title="设计组">
                <Menu.Item key="sj_1">主观题</Menu.Item>
                <Menu.Item key="sj_2">选择题</Menu.Item>
              </SubMenu>
              <SubMenu className='submenu-container' key="yf" icon={<ToolOutlined />} title="研发组">
                <Menu.Item key="yf_1">主观题</Menu.Item>
                <Menu.Item key="yf_2">选择题</Menu.Item>
              </SubMenu>
            </Menu>
          </Row>
          {
            questionList.length!==0? (
              questionList.map(item => (
                <Card
                  title={item.type}
                  extra={
                    <div>
                      <p>{item.uploader}</p>
                      <p>{item.time}</p>
                    </div>
                  }
                >
                  <p>{item.answer}</p>
                </Card>
              ))
            ):(
            <Row justify="center" align="middle" style={{ height: 400 }}>
              <Empty />
            </Row>
          )
          }
        </Card>
      </>
  )
};

export default LookTitle;