import React, { Component } from 'react';

//importando dependencias do react-router
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import App from '../App';

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home} />
        </Switch>
      </main>
    )
  }
};

export default Main;


