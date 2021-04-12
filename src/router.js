import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Error from './pages/error/index';
import TestLogin from './pages/test/login/index';
import TestUser from './pages/test/user/index';
import { user } from './utils/user';
import store from './reducer/index';
import AnimatedSwitch from './utils/animation';

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
          <Route path='/home' component={Home}/>
          <AnimatedSwitch>
            <Route exact path='/testLogin' component={TestLogin} />
            <Route exact path='/testuser' component={TestUser}/>
          </AnimatedSwitch>
          <Route component={Error} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
};

export default AppRouter;