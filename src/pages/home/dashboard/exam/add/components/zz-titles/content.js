import React from 'react';
import {
  Empty,
  Card,
  Row,
} from 'antd';
import Choose from './choose';
import Blank from './blank';
import Judge from './judge';
import Picture from './picture';
import Question from './question';

const Content = (props) => {
  const { index } = props;
  if(index === 'null') {
    return (
      <Card>
        <Row justify="center" align="middle" style={{ height: 300 }}>
          <Empty />
        </Row>
      </Card>
    )  
  }
  if(index === 'xz') {
    return <Choose />
  }
  if(index === 'tk') {
    return <Blank />
  }
  if(index === 'pd') {
    return <Judge />
  }
  if(index === 'zt') {
    return <Picture />
  }
  if(index === 'wd') {
    return <Question />
  }
};

export default Content;