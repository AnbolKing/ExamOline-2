import React from 'react';
import { GroupedColumn  } from '@ant-design/charts';

const Chart = () => {
  const data = [
    {
      name: '通过率',
      考量维度: '是否通过',
      百分比: 74.6,
    },
    {
      name: '参考率',
      考量维度: '是否通过',
      百分比: 25.4,
    },
    {
      name: 'A',
      考量维度: '等级分布',
      百分比: 28.8,
    },     
    {
      name: 'B',
      考量维度: '等级分布',
      百分比: 33.2,
    },
    {
      name: 'C',
      考量维度: '等级分布',
      百分比: 21.8,
    },
    {
      name: 'D',
      考量维度: '等级分布',
      百分比: 10.7,
    },
    {
      name: 'E',
      考量维度: '等级分布',
      百分比: 5.5,
    },
  ];
  const config = {
    title: {
      visible: true,
      text: '研发组一轮笔试图表',
    },
    forceFit: true,
    data,
    xField: '考量维度',
    yField: '百分比',
    yAxis: { min: 0 },
    label: { visible: true },
    groupField: 'name',
    color: ['#1ca9e6', '#f88c24','#ae331b', '#f27957', '#dadada', '#609db7', '#1a6179'],
  };
  return (
    <GroupedColumn {...config} />
  )
};

export default Chart;