import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//importando dependencias do react-router
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home} />
        </Switch>
    </BrowserRouter>,  
    document.getElementById('root')
);
registerServiceWorker();
