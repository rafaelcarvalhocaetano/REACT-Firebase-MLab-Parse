import React, { Component } from 'react';

import '../main/app.css';
import Header from '../menu/Header';



export default class App extends Component {
  
  render() {
    return (
      <div className="col-sm-12">
        <Header/>  
      </div>   
     
    );
  }
}
