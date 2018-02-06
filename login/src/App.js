import React, { Component } from 'react';
import Login from './component/Login'
import './component/Style.css';
import logo from './component/Firebase.png'

import * as firebase from "firebase";

class App extends Component {

  auth = undefined;
  config = undefined;

  constructor(){

      super();
      this.autentication = this.autentication.bind(this);
      
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

   firebase.auth().onAuthStateChanged(function(singUser) {
       
      if (singUser) {

          this.setState({
              user: singUser
          })

          console.log(singUser.email, ' - ', singUser.uid);
          localStorage.setItem('firebase_auth', this.state.user);
      
      } else {
          this.setState={
              user: undefined
          }
          
          localStorage.removeItem('firebase_auth');
      }
    });
  }
  
  autentication(e){

      e.preventDefault();
  
      firebase.auth().signInWithEmailAndPassword(this.refs.email, this.refs.pass)
      .then(
          singUser => {
              console.log(singUser.email, '--', singUser.uid);
              this.setState({
                  user: singUser
              })
          }
      )
      .catch(function(error) {
  
          var errorMessage = error.message;
         console.log(errorMessage);
        });
  }


render() {
  return (
    <div className="container col-sm-3">
  
          <img src={logo}/>
      
      <form onSubmit={this.autentication}>

      <div className="form-group">
          <span>Email</span>
          <input type="Email" refs="email" name="user" className="form-control" placeholder="Email"/>
      
          <span>Senha</span>
          <input type="Password" refs="pass" name="pass" className="form-control" placeholder="Password"/>
      </div>
      <button type="Submit" className="btn btn-primary col-sm-12">Login</button>
      </form>
      <span>Cadastre-se</span>
  
   
    </div>
  )
}
}


export default App;
