import React, { Component } from 'react';
import App from '../App';
import '../components/login.css';

export class Navbar extends Component {
    render() {
        return (

            <div>
                <App />
                <div className="box">
                <i className="fas fa-fire fa-7x img"></i>

                <form className="form-horizontal">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
                        type="email"   name="email" required  id="email"/>
                      <small id="emailHelp" className="form-text text-muted">Informe seu email.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Password</label>
                      <input className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"
                        type="password"   name="password" required  id="password"/>
                      <small id="password" className="form-text text-muted">Informe sua password.</small>
                    </div>
                     <button type="submit" className="btn btn-primary container">Logar</button>
                     <button type="submit" className="btn btn-success container bb">Cadastrar</button>
                </form>
                </div>
            </div>


        )
    }
};

export default Navbar;
