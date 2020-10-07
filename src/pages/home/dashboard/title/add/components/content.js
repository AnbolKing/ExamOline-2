import React from 'react';
import {
  Row,
  Empty,
} from 'antd';
import Judge from './judge';
import Choose from './choose';
import Picture from './picture';
import Question from './question';
import Blank from './blank';

const Content = (props) => {
  const { titleType } = props;
  if(titleType === 0) {
    return (
      <Row justify="center" align="middle" style={{ height: 400 }}>
        <Empty />
      </Row>
    )
  }
  if(titleType === 3) {
    return (
      <Question />
    )
  }
  if(titleType === 5) {
    return (
      <Judge />
    )
  }
  if(titleType === 1) {
    return (
      <Choose />
    )
  }
  if(titleType === 4) {
    return (
      <Picture />
    )
  }
  if(titleType === 2) {
    return (
      <Blank />
    )
  }
};
export default Content;