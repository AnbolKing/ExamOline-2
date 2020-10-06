import { Layout, Spin } from 'antd';
import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import MenuBar from '../home/components/menu/index';
import Content from '../home/components/content/index';
import Foot from '../home/components/foot/index';

const { Header } = Layout;

const Index = lazy(() => import("../home/dashboard/index/index"));
const Title = lazy(() => import("../home/dashboard/title/index"));
const Exam = lazy(() => import("../home/dashboard/exam/index"));
const Analysis = lazy(() => import("../home/dashboard/analysis/index"));

const Test = () => {
  return (
    <Layout style={{height:'100vh'}}>
      <MenuBar />
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route exact path='/home' component={Index}/>
            <Route exact path='/home/title' component={Title}/>
            <Route exact path='/home/exam' component={Exam}/>
            <Route exact path='/home/analysis' component={Analysis}/>
          </Switch>
        </Suspense>
      </Content>
      <Foot />
    </Layout>
  </Layout>
  )
}
export default Test;