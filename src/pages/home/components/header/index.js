import React from 'react';
import './style.css';
import ncuLogo from '../../../../assets/ncuhome-logo.png';
import {
  Layout,
  Typography,
  Image
} from 'antd';

const { Text } = Typography;
const { Header:LayoutHeader } = Layout;

const Header = () => {
  return (
    <LayoutHeader className="header">
      <Image src={ncuLogo} height="36px" width="36px" preview={false} />
      <Text className="ncuhome">NCUHOME</Text>
      <Text className="title">家园工作室线上考试系统</Text>
    </LayoutHeader>
  )
}

export default Header;