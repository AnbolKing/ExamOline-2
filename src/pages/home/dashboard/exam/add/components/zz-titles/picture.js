import React from 'react';
import {
  Card,
} from 'antd';
import { data } from './data';
const { Meta } = Card;

const Picture = () => {
  const { zt } = data;
  return (
    <Card>
      {
        zt.map((item,key) => {
          return (
            <Card
              hoverable
              style={{
                width: '210px',
                margin:'16px',
                display:'inline-block',
                background:'#fefefe'
              }}
              cover={<img alt={`题目${key+1}`} src={item.imgSrc} />}
            >
              <Meta title={item.question} description="好好画，前端不容易..." />
            </Card>
          )
        })
      }
    </Card>
  )
};
export default Picture;