import React, { Component } from 'react';
import Login from '../components/Login';

import * as firebase from "firebase";

export class Header extends Component {


    user = undefined;

    

    constructor(props){
        super(props);

        this.logOut = this.logOut.bind(this);
        this.uidUSER = this.uidUSER.bind(this);
        
       
        this.setState={
            user:undefined
        }
    }
   

    logOut(){
        firebase.auth().signOut()
        .then(() => {
            this.props.history.push('/');
          }).catch(function(error) {
           console.log('erro');
          });
    }
    uidUSER(){
        firebase.auth().onAuthStateChanged((u) => {
            this.user = u.email;
            console.log(this.user);
        });
    }
   
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-user-circle"></i>
                        <h1>{this.uidUSER.user}</h1>
                       
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sing Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Header;
