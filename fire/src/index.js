import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//importando dependencias do react-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//importando as classes
import Home from './components/Home';
import Login from './components/Login';
ReactDOM.render(

    <BrowserRouter>
    <div>
     <Switch>  
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} /> 
      </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
