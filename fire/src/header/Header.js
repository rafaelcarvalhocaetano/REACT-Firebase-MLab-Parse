import React, { Component } from 'react';

import * as firebase from "firebase";

import { Link } from 'react-router-dom';

export class Header extends Component {


    user = undefined;
    constructor(props){
        super(props);

        this.logOut = this.logOut.bind(this);
        this.uidUSER = this.uidUSER.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.config = {
            apiKey: "AIzaSyA2Bu5Hi5UdzUyIWqGTFLMEhBuGnAUA_uY",
            authDomain: "crud-react-2c03c.firebaseapp.com",
            databaseURL: "https://crud-react-2c03c.firebaseio.com",
            projectId: "crud-react-2c03c",
            storageBucket: "crud-react-2c03c.appspot.com",
            messagingSenderId: "1078928272096"
        };
        this.state = {
            user: this.user
        }
    }

    componentDidMount() {
        firebase.initializeApp(this.config);
        this.auth = firebase.auth();

        firebase.auth().onAuthStateChanged((signedUser) => {
            if (signedUser) {
              // User is signed in.
              this.setState({
                user: signedUser
              });
              console.log('Incluindo no localStorage')
              //Não é necessário incluir no localStorage
              //pois a plataforma do Firebase já inclui.
              //localStorage.setItem('firebase_auth', this.state.user);
            } else {
              console.log('The user has been logged out');
              this.setState({
                user: undefined
              });
              //Não é necessário incluir no localStorage
              //pois a plataforma do Firebase já inclui.
              //localStorage.removeItem('firebase_auth');
            }
          }); 
    }
   

    logOut(){
        firebase.auth().signOut()
        .then((e) => {
            this.props.history.push('/');
          }).catch(function(error) {
           console.log('erro', error);
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
                    <Link className="navbar-brand" to="/home">
                        <i className="fas fa-user-circle"></i>
                    </Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary" onClick={this.logOut}></button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Header;
