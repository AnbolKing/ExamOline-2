import React from 'react';
import {
  Card,
  Row,
  Col,
  InputNumber,
  Divider,
  Button
} from 'antd';

const TK = () => {
  return (
    <Card>
      <Row className="title-item">
        <Col span={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          选择题
        </Col>
        <Col span={8} offset={4} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <div>请输入题目数量：</div>
          <InputNumber size='large' min={0} max={100000} defaultValue={0} style={{borderRadius:'5px',width:'30%'}}/>
        </Col>
      </Row>
      <Divider />
      <Row className="title-item">
        <Col span={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          填空题
        </Col>
        <Col span={8} offset={4} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <div>请输入题目数量：</div>
          <InputNumber size='large' min={0} max={100000} defaultValue={0} style={{borderRadius:'5px',width:'30%'}}/>
        </Col>
      </Row>
      <Divider />
      <Row className="title-item">
        <Col span={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          问答题
        </Col>
        <Col span={8} offset={4} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <div>请输入题目数量：</div>
          <InputNumber size='large' min={0} max={100000} defaultValue={0} style={{borderRadius:'5px',width:'30%'}}/>
        </Col>
      </Row>
      <Divider />
      <Row className="title-item">
        <Col span={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          作图题
        </Col>
        <Col span={8} offset={4} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <div>请输入题目数量：</div>
          <InputNumber size='large' min={0} max={100000} defaultValue={0} style={{borderRadius:'5px',width:'30%'}}/>
        </Col>
      </Row>
      <Divider />
      <Row className="title-item">
        <Col span={6} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          判断题
        </Col>
        <Col span={8} offset={4} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <div>请输入题目数量：</div>
          <InputNumber size='large' min={0} max={100000} defaultValue={0} style={{borderRadius:'5px',width:'30%'}}/>
        </Col>
      </Row>
      <Row style={{marginTop:'25px',display:'flex', justifyContent:'center'}}>
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
      </Row>
    </Card>
  )
};
export default TK;