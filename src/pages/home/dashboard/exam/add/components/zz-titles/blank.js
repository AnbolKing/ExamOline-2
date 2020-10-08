import React from 'react';
import {
  Card,
} from 'antd';
import { data } from './data';

const Blank = () => {
  const { tk } = data;
  return (
    <Card>
      {
        tk.map((item,key) => {
          return (
            <Card
              key={key}
              title={item.question}
              style={{width:'100%'}}
            >
              <ol>
                {
                  item.answer.map((item,key) => {
                    return (
                    <li key={key}>{item}</li>
                    )
                  })
                }
              </ol>
            </Card>
          )
        })
      }
    </Card>
  )
};
export default Blank;