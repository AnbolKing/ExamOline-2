import React from 'react';
import './style.css';
import {
  Card,
  Row,
  Button,
  Divider,
  Descriptions,
  Input,
  Tooltip,
  Table,
  Modal,
} from 'antd';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useHistory, useLocation }  from 'react-router-dom';
const { TextArea } = Input;

const dataSource = [
  {
    key:'1',
    name:'古新宇',
    time:'2020/8/20',
    grade:'100'
  },
  {
    key:'1',
    name:'刘镇',
    time:'2020/8/22',
    grade:'90'
  }
]

const Info = () => {
  const history = useHistory();
  const location = useLocation();
  let index = location.pathname.lastIndexOf('/');
  const hashRoute = location.pathname.slice(index+1);
  const handleBack = () => {
    history.goBack();
  };
  const handleRecord = () => {
    const columns = [
      {
        title:'判卷人',
        dataIndex:'name',
        key:'name'
      },
      {
        title:'判卷时间',
        dataIndex:'time',
        key:'time'
      },
      {
        title:'分数',
        dataIndex:'grade',
        key:'grade'
      }
    ]
    Modal.info({
      content:(
        <Table 
          dataSource={dataSource} 
          columns={columns} 
          pagination={false}
        />
      ),
      maskClosable:'true',
      icon:null,
    });
  }
  return (
    <div className="info-container">
      <Card className='info-paper'>
        <Divider orientation='left' style={{fontSize:'14px'}}>题目一</Divider>
        <Row>
          <Card 
            className='paper-item'
            title='你希望你能从家园工作室收获什么，同时你觉得你能给家园工作室带来什么？'
            extra={
              hashRoute==='info' ? (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord}>
                    判卷记录
                  </Button>
                </div>
              ) : (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord} className='item'>
                    判卷记录
                  </Button>
                  <Button type="default" size={'small'} shape={'round'} className='item'>
                    所用时长 4min25s
                  </Button>
                  <Input placeholder="输入分数" className='item' style={{width:'100px'}}/>
                </div>
              )
            }
            style={{
              width:'100%'
            }}
          >
            <p>家园能够让我获得技术上的飞速提升</p>
            <p>我觉得家园能让我认识一群志同道合的好朋友</p>
            <p>我觉得我能给家园带来无限的搬砖(bushi</p>
          </Card>
        </Row>
        <Divider orientation='left' style={{fontSize:'14px'}}>题目二</Divider>
        <Row>
          <Card 
            className='paper-item'
            title='请你谈谈你对前端 / 后端的理解'
            extra={
              hashRoute==='info' ? (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord}>
                    判卷记录
                  </Button>
                </div>
              ) : (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord} className='item'>
                    判卷记录
                  </Button>
                  <Button type="default" size={'small'} shape={'round'} className='item'>
                    所用时长 4min25s
                  </Button>
                  <Input placeholder="输入分数" className='item' style={{width:'100px'}}/>
                </div>
              )
            }
            style={{
              width:'100%'
            }}
          >
            <p>我觉得前端就是写页面，和用户打交道；而后端就是负责服务，主要负责数据的处理等</p>
          </Card>
        </Row>
        <Divider orientation='left' style={{fontSize:'14px'}}>题目三</Divider>
        <Row>
          <Card 
            className='paper-item'
            title='你希望你能从家园工作室收获什么，同时你觉得你能给家园工作室带来什么？'
            extra={
              hashRoute==='info' ? (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord}>
                    判卷记录
                  </Button>
                </div>
              ) : (
                <div className='extra-container'>
                  <Button type="default" size={'small'} shape={'round'} onClick={handleRecord} className='item'>
                    判卷记录
                  </Button>
                  <Button type="default" size={'small'} shape={'round'} className='item'>
                    所用时长 4min25s
                  </Button>
                  <Input placeholder="输入分数" className='item' style={{width:'100px'}}/>
                </div>
              )
            }
            style={{
              width:'100%'
            }}
          >
            <p>家园能够让我获得技术上的飞速提升</p>
            <p>我觉得家园能让我认识一群志同道合的好朋友</p>
            <p>我觉得我能给家园带来无限的搬砖(bushi</p>
          </Card>
        </Row>
      </Card>
      <Card className='info-user' style={{display:'flex',alignItems:'center'}}>
        <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button type="default" icon={<LeftOutlined />} size={'large'} shape={'round'} onClick={handleBack}>
            返回
          </Button>
        </Row>
        <Row style={{marginBottom:'30px',display:'flex',justifyContent:'space-around'}}>
          <Tooltip title="上一个">
            <Button shape="circle" icon={<LeftOutlined />} style={{width:'50px',height:'50px'}}/>
          </Tooltip>
          <Tooltip title="下一个">
            <Button shape="circle" icon={<RightOutlined />} style={{width:'50px',height:'50px'}}/>
          </Tooltip>
        </Row>
        <Row>
          <Button 
            type="default" 
            size={'large'}
            style={{
              width:'100%',
            }}
          >
            开始批改
          </Button>
        </Row>
        <Descriptions bordered style={{margin:'30px 0'}}>
          <Descriptions.Item label="姓名" span={4}>王 子安</Descriptions.Item>
          <Descriptions.Item label="学院" span={1}>信息工程学院</Descriptions.Item>
          <Descriptions.Item label="专业" span={3}>物联网工程</Descriptions.Item>
          <Descriptions.Item label="得分" span={1}>96</Descriptions.Item>
          <Descriptions.Item label="等级" span={3}>A</Descriptions.Item>
          <Descriptions.Item label="家园人评价">
            小学弟长得挺帅发绿卡（bushi
            <br />
            感觉态度挺好，但是基础偏弱
            <br />
            算法题倒是做的蛮不错
            <br />
            当学委？🦈了🦈了
            <br />
            学生会or家园二选一
            <br />
            想见帅气学弟第一day~
            <br />
          </Descriptions.Item>
        </Descriptions>
        <TextArea autoSize placeholder='看都看了，不留个念想？'/>
        <Button type="primary" style={{margin:'10px 0'}}>
          提交
        </Button>
      </Card>
    </div>
  )
};

export default Info;