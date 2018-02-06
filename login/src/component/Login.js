import React, { Component } from 'react';
import '../component/Style.css';

export default class Login extends Component {
  render() {
    return (
      <div className="container col-sm-4">
        <div>
            <img src={"/Firebase.png"}/>
        </div>
        
        <div className="form-group">
            <span>Email</span>
            <input type="Email" className="form-control" placeholder="Email"/>
        
            <span>Senha</span>
            <input type="Password" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary col-sm-12">Login</button>
     
      </div>
    )
  }
}
