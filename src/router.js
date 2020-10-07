import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Error from './pages/error/index';
import Test from './pages/test/index';
import { user } from './utils/user';

const AppRouter = () => {
  const { isLogin } = user();
  const handleRouter = () => {
    return isLogin() ? <Redirect to="/home" /> : <Redirect to="/login" />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={handleRouter}/>
        <Route exact path='/login'  component={Login} />
        <Route path='/home' component={Home}/>
        <Route path='/test' component={Test} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
};

export default AppRouter;