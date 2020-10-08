import React from 'react';
import {
  Result
} from 'antd';
import {
  SmileOutlined
} from '@ant-design/icons';

const FJ = () => {
  return (
    <Result
      icon={<SmileOutlined />}
      title="请联系行政小姐姐提交附件进行试卷的打印工作哦~"
      extra={
        <div>
          <p>
            附件发送邮箱：
            <a href="mailto:hr_cuhome@ncuhome.com">hr_cuhome@ncuhome.com</a>
          </p>
          <p>行政联系电话：
            <a href="tel://18370605879">18370605879</a>
          </p>
        </div>
      }
    />
  )
};

export default FJ;