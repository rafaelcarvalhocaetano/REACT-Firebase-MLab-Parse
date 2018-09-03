import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../home/Home';
import UserCrud from '../user/UserCrud';

export default porps => 
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Redirect from='*' path='/' />
</Switch>


