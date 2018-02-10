import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <Navbar/>
        </div>
     </div>
    );
  }
}

export default App;
