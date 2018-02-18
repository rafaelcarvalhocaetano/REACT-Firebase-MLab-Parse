import React, { Component } from 'react';
import App from '../App';
import '../components/login.css';

import * as firebase from "firebase";

//import Home from '../components/Home';
//import { Route, Link } from 'react-router-dom';




export class Navbar extends Component {

    auth = undefined;
    config = undefined;
    provider = undefined;

    constructor(props) {

        super(props);
        this.loginGoogle = this.loginGoogle.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        
        this.loginGitHub = this.loginGitHub.bind(this);
        this.loginEmailSimple = this.loginEmailSimple.bind(this);
        this.loginFaceBook = this.loginFaceBook.bind(this);
       
        this.config = {
            apiKey: "AIzaSyA2Bu5Hi5UdzUyIWqGTFLMEhBuGnAUA_uY",
            authDomain: "crud-react-2c03c.firebaseapp.com",
            databaseURL: "https://crud-react-2c03c.firebaseio.com",
            projectId: "crud-react-2c03c",
            storageBucket: "crud-react-2c03c.appspot.com",
            messagingSenderId: "1078928272096"
        };
        this.state = {
            user: undefined
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

    loginGoogle() {
        firebase.auth().languageCode = 'pt';
        this.provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(this.provider)
            .then((result) => {
               console.log('ok');
               this.props.history.push('/home');
            })
            .catch((e) => {
                console.log('erro',e);
                this.props.history.push('/login');
            })
    }
    loginEmailSimple(event){
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.password.value)
        .then((user) => {
            this.props.history.push('/home');
        })
        .catch(function(error) {
            console.log('erro aqui -- ',error);
          });

    }

    loginGitHub(){
        this.provider = new firebase.auth.GithubAuthProvider();

        firebase.auth().signInWithPopup(this.provider)
        .then((result) => {
            this.props.history.push('/home');
          })
          .catch((error) => {
           console.log('erro', error);
          });
    }

    loginFaceBook(){
        this.provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(this.provider)
        .then(user => {
            this.props.history.push('/home');
        })
        .catch(function(error) {
           console.log('erro');
        });
    }


    render() {
        return (

            <div>
                <App />
                <div className="box">
                    <i className="fas fa-fire fa-7x img"></i>

                    <form onSubmit={this.autenticacao} className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
                                type="email" name="email" required ref="email" />
                            <small id="emailHelp" className="form-text text-muted">Informe seu email.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input className="form-control" aria-describedby="emailHelp" placeholder="Enter email"
                                type="password" name="password" ref="password" />
                            <small id="password" className="form-text text-muted">Informe sua password.</small>
                        </div>
                        
                        <button type="submit" className="btn btn-primary container" onClick={this.logar}>Login</button>
                        <button type="submit" className="btn btn-success container bb" onClick={
                            this.autenticacao
                            }>Cadastrar</button>
                    </form>
                </div>
            </div>


        )
    }
};

export default Navbar;
