import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from '../pages/notFound'


function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/home' component={Home}/>
      <Route component={NotFound}/>
    </Switch>
  )
}

export default Routes;