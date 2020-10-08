import React, { Suspense,lazy } from 'react';
import { 
  Switch,
  Route,
 } from 'react-router-dom';
import {
  Spin
} from 'antd';
const LookExam = lazy(() => import('./look'));
const AddExam = lazy(() => import('./add'));
const Class = lazy(() => import('./class'));
const Info = lazy(() => import('./info'));

const Exam = () => {
  return (
    <div className="exam-container">
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route exact path='/home/exam' component={LookExam}/>
          <Route exact path='/home/exam/add' component={AddExam} />
          <Route exact path='/home/exam/class' component={Class} />
          <Route exact path='/home/exam/info' component={Info} />
          <Route exact path='/home/exam/correct' component={Info} />
        </Switch>
      </Suspense>
    </div>
  )
};

export default Exam;