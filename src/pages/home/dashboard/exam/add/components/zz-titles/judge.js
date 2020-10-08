import React from 'react';
import {
  Card,
} from 'antd';
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone 
} from '@ant-design/icons';
import { data } from './data';

const Judge = () => {
  const { pd } = data;
  return (
    <Card>
      {
        pd.map((item,key) => {
          return (
            <Card
              key={key}
              title={item.question}
              style={{width:'100%'}}
            >
              <h3>{item.answer ? <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'30px'}}/> : <CloseCircleTwoTone twoToneColor="#eb2f96" style={{fontSize:'30px'}}/>}</h3>
            </Card>
          )
        })
      }
    </Card>
  )
};
export default Judge;