import React, { Component } from 'react';
import '../component/Style.css';

import * as firebase from "firebase";

export default class Login extends Component {

    auth = undefined;
    config = undefined;

    constructor(){

        super();
        this.authenticate = this.authenticate.bind(this);
        this.cadastramentoFirebase = this.cadastramentoFirebase.bind(this);
        this.logout = this.logout.bind(this);
        
    this.config = {
            apiKey: "AIzaSyAReJEJx28tyjkvlKC3SpINd5j3hKojHS0",
            authDomain: "react-auth-3ddd7.firebaseapp.com",
            databaseURL: "https://react-auth-3ddd7.firebaseio.com",
            projectId: "react-auth-3ddd7",
            storageBucket: "react-auth-3ddd7.appspot.com",
            messagingSenderId: "523276128635"
          };

          this.state = {
              user:undefined
          }
    }


    componentDidMount (){
     
        firebase.initializeApp(this.config);

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

    logout(){
        console.log('User is about to be logged out.')
        this.auth.signOut();
      }

    cadastramentoFirebase(e){

        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.pass.value)
        .then(userCreate => {
            this.setState({
                user:userCreate
            })
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;

            console.log('Erro ',errorMessage);
          });

    }
    
    authenticate(e){

        e.preventDefault();
        console.log('Call Firebase to authenticate');
        //console.log(this.refs.email.value, '-', this.refs.password.value);
    
        firebase.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.pass.value)
        .then(signedUser => {
            this.setState({
              user: signedUser
            })
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, ' - ', errorMessage);
          });
    }


  render() {
    return (
      <div className="container col-sm-3">
    
            <img src={require('../component/Firebase.png')} alt="Firebase"/>
        
        <form onSubmit={this.authenticate} >

        <div className="form-group">
            <span>Email</span>
            <input type="email" ref="email" name="user" className="form-control" placeholder="Email"/>
        
            <span>Senha</span>
            <input type="password" ref="pass" name="pass" className="form-control" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>

        <button type="button" onClick={this.cadastramentoFirebase} className="btn btn-success btn-block">Cadastrar</button>
       
        </form>
     
      </div>
    )
  }
}
