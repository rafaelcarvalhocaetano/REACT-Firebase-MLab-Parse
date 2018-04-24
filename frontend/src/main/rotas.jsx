import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Todo } from '../todo/todo';
import { About } from '../about/about';

export default class Rotas extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/todos' component={Todo} />
          <Route path='/about' component={About} />
          <Redirect from="*" to="/todos" />
        </Switch>
      </div>
    )
  }
}
