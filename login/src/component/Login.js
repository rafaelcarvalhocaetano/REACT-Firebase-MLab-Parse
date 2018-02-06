import React, { Component } from 'react';
import '../component/Style.css';
import logo from '../component/Firebase.png'

export default class Login extends Component {
  render() {
    return (
      <div className="container col-sm-3">
    
            <img src={logo}/>
    
        
        <div className="form-group">
            <span>Email</span>
            <input type="Email" className="form-control" placeholder="Email"/>
        
            <span>Senha</span>
            <input type="Password" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary col-sm-12">Login</button>
        <span>Cadastre-se</span>
     
      </div>
    )
  }
}
