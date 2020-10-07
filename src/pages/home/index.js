import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Spin } from "antd";

import Header from "./components/header";
import MenuBar from "./components/menu";
import Content from "./components/content";
import Foot from "./components/foot";

const Index = lazy(() => import("./dashboard/index"));
const Title = lazy(() => import("./dashboard/title"));
const Exam = lazy(() => import("./dashboard/exam"));
const Analysis = lazy(() => import("./dashboard/analysis"));

const Home = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", minWidth: "1600px" }}
      className="site-layout"
    >
      <Header />
      <Layout>
        <MenuBar />
        <Layout style={{ padding: "0 24px 24px", minWidth: "800px" }}>
          <Content>
            <Suspense fallback={<Spin />}>
              <Switch>
                <Route exact path="/home" component={Index} />
                <Route path="/home/title" component={Title} />
                <Route path="/home/exam" component={Exam} />
                <Route path="/home/analysis" component={Analysis} />
              </Switch>
            </Suspense>
          </Content>
          <Foot />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
