import React from 'react';
import './style.css';
import ncuLogo from '../../../../assets/ncuhome-logo.png';
// import userAvter from '../../../../assets/avter.png';
import {
  Layout,
  Typography,
  Image
} from 'antd';
import { useHistory } from 'react-router-dom';

const { Text } = Typography;
const { Header:LayoutHeader } = Layout;

const Header = () => {
  const history = useHistory();
  const handleIndex = () => {
    history.push('/home');
  }
  return (
    <LayoutHeader className="header">
      <Image src={ncuLogo} height="36px" width="36px" preview={false} onClick={handleIndex} style={{cursor:'pointer'}}/>
      <Text className="ncuhome">NCUHOME</Text>
      <Text className="title">家园工作室线上考试系统</Text>
    </LayoutHeader>
  )
}

export default Header;