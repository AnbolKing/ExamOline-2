import React from "react";
import { Layout } from "antd";

const { Content: LayoutContent } = Layout;

const Content = (props) => {
  const { children } = props;
  return (
    <LayoutContent
      className="site-layout-background"
      style={{
        padding: 24,
        paddingTop: 36,
        minWidth: "800px",
        margin: 0,
        minHeight: 280,
      }}
    >
      {children}
    </LayoutContent>
  );
};

export default Content;
