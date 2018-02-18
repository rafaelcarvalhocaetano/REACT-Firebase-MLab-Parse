import React, { Component } from 'react';

import './App.css';

import { Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-dark justify-content-between">
            <Link className="nav-link active" to="/"><i className="fab fa-react"></i></Link>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">LinkedIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sing In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/">Disabled</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
