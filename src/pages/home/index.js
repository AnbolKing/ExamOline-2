import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import {
  Layout,
  Spin
} from 'antd';

// 引入Home组件
import Header from './components/header/index';
import MenuBar from './components/menu/index';
import Content from './components/content/index';
import Foot from './components/foot/index';

//引入分页组件
const Index = lazy(() => import("./dashboard/index/index"));
const Title = lazy(() => import("./dashboard/title/index"));
const Exam = lazy(() => import("./dashboard/exam/index"));
const Analysis = lazy(() => import("./dashboard/analysis/index"));

const Home = () => {
  return (
    <Layout 
      className="site-layout"
      style={{ minHeight: "100vh", minWidth: "1600px" }}
    >
      <Header />
      <Layout>
        <MenuBar />
        <Layout style={{ padding: "0 24px 24px", minWidth: "800px" }}>
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
    </Layout>
  )
}

export default Home;