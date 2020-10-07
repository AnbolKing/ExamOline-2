import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
import {
  Row,
  Spin,
  Empty
} from 'antd';
import Header from './components/header';
import Content from './components/content';
const LookTitle = lazy(() => import("./look"));
const AddTitle = lazy(() => import("./add"));

const Title = () => {
  return (
    <div className="title-container">
      <Header />
      <Content>
        <Suspense fallback={<Spin style={{margin:'30px'}}/>}>
          <Switch>
            <Route exact path="/home/title" render={() => (
              <Row justify="center" align="middle" style={{ height: 400 }}>
                <Empty />
              </Row>
            )} />
            <Route exact path="/home/title/look" component={LookTitle} />
            <Route exact path="/home/title/add" component={AddTitle} />
          </Switch>
        </Suspense>
      </Content>
    </div>
  )
};

export default Title;