import React, { Suspense,lazy } from 'react';
import { 
  Switch,
  Route,
 } from 'react-router-dom';
import {
  Spin
} from 'antd';
const LookAnalysis = lazy(() => import('./look'));
const ShowAnalysis = lazy(() => import('./show'));

const Exam = () => {
  return (
    <div className="exam-container">
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route exact path='/home/analysis' component={LookAnalysis}/>
          <Route exact path='/home/analysis/show' component={ShowAnalysis}/>
        </Switch>
      </Suspense>
    </div>
  )
};

export default Exam;