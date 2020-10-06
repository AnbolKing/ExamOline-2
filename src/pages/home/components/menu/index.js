import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

const MenuBar = () => {
  const His = useHistory();

  const handleMenuClick = (e) => {
    His.push(e.key);
  };

  return (
    <Sider>
      <Menu
        defaultSelectedKeys={[window.location.pathname]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item
          onClick={handleMenuClick}
          key="/home"
          icon={<HomeOutlined />}
        >
          首页
        </Menu.Item>
        <Menu.Item
          onClick={handleMenuClick}
          key="/home/title"
          icon={<DiffOutlined />}
        >
          题库管理
        </Menu.Item>
        <Menu.Item
          onClick={handleMenuClick}
          key="/home/exam"
          icon={<UnorderedListOutlined />}
        >
          考试管理
        </Menu.Item>
        <Menu.Item
          onClick={handleMenuClick}
          key="/home/analysis"
          icon={<BarChartOutlined />}
        >
          考试分析
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MenuBar;
