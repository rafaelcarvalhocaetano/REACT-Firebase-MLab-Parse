import React, { Component } from 'react'

class Navbar extends Component {


    render() {
        return (
            
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>

    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
  </nav>

        );
  }
}

export default Navbar;
