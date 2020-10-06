import React from "react";
import { Layout, Typography } from "antd";

const { Footer: LayoutFooter } = Layout;
const { Text } = Typography;

const Foot = () => {
  return (
    <LayoutFooter style={{textAlign:'center'}}>
      <Text>© 2020 家园工作室 Made by NCUHOME AnbolKing</Text>
    </LayoutFooter>
  );
};

export default Foot;
