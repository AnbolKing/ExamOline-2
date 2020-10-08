import React from 'react';
import {
  Card,
  Tag,
  Space,
} from 'antd';
import {
  CheckCircleTwoTone
} from '@ant-design/icons';
import { data } from './data';

const Choose = () => {
  const { xz } = data;
  return (
    <Card>
      {
        xz.map((item,key) => {
          return (
            <Card
              key={key}
              title={item.question}
              extra={
                (item.correct).map((correct,index) => {
                  return (
                    <Tag color="geekblue" style={{marginRight:'5px'}} key={index}>{correct}</Tag>
                  )
                })
              }
              style={{width:'100%'}}
            >
              <h4>
                <Space direction='horizontal' size='large'>
                <span>A. {item.A}</span>
                {
                  'A'.indexOf(item.correct)!==-1 ? <CheckCircleTwoTone twoToneColor="#52c41a"/>: null
                }
                </Space>
              </h4>
              <h4>
                <Space direction='horizontal' size='large'>
                <span>B. {item.B}</span>
                {
                  'B'.indexOf(item.correct)!==-1 ? <CheckCircleTwoTone twoToneColor="#52c41a"/>: null
                }
                </Space>
              </h4>
              <h4>
                <Space direction='horizontal' size='large'>
                <span>C. {item.C}</span>
                {
                  'C'.indexOf(item.correct)!==-1 ? <CheckCircleTwoTone twoToneColor="#52c41a"/>: null
                }
                </Space>
              </h4>
              <h4>
                <Space direction='horizontal' size='large'>
                <span>D. {item.D}</span>
                {
                  'D'.indexOf(item.correct)!==-1 ? <CheckCircleTwoTone twoToneColor="#52c41a"/>: null
                }
                </Space>
              </h4>
            </Card>
          )
        })
      }
    </Card>
  )
};
export default Choose;