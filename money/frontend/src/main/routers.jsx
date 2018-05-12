import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


import Dashboard from '../dashboard/dashboard'
import billing from '../billingcycle/billingcycle'

export default props => (
    <div className="content-wrapper">
    <Switch>
        <Route exact path='/' component={Dashboard} />
       
        <Route path='/billingcycle' component={billing}/>
        <Redirect from='*' to='/' />
    </Switch>
    </div>

)