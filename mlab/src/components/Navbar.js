import React, { Component } from 'react'

import firebase from '../assets/f1.png';

import '../components/Navbar.css';

class Navbar extends Component {


    render() {
        return (
            
  <nav class="navbar navbar-dark bg-dark">
  <img src={(firebase)}/>

    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link active" href="#">GitHub</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Create Account</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Log In</a>
        </li>
    </ul>

  </nav>

        );
  }
}

export default Navbar;
