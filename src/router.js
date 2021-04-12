import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Error from './pages/error/index';
import Test from './pages/test/index';
import { user } from './utils/user';
import store from './reducer/index';

const AppRouter = () => {
  const { isLogin } = user();
  const handleRouter = () => {
    return isLogin() ? <Redirect to="/home" /> : <Redirect to="/login" />;
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={handleRouter}/>
          <Route exact path='/login'  component={Login} />
          <Route exact path='/test' component={Test} />
          <Route path='/home' component={Home}/>
          <Route component={Error} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
};

export default AppRouter;