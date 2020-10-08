import React from 'react';
import {
  Card,
  Row,
  Divider,
  Tag
} from 'antd';
import { data } from './data';

const Question = () => {
  const { wd } = data;
  return (
    <Card>
      {
        wd.map((item,key) => {
          return (
            <div className="wd-item">
              <Tag color="processing" style={{marginBottom:'10px'}}>题目{key+1}</Tag>
              <Row 
                key={key}
              >
                {item}
              </Row>
              <Divider />
            </div>
          )
        })
      }
    </Card>
  )
};
export default Question;