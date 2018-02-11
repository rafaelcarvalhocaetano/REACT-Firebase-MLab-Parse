import React, { Component } from 'react'

import firebase from '../assets/f1.png';

import '../components/Navbar.css';
import { PainelGrid } from './PainelGrid';


class Navbar extends Component {


    render() {
        return (
           <div>
            <nav className="navbar navbar-dark bg-dark col-sm-12">
                    <img src={(firebase)} />

                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log In</a>
                        </li>
                    
                    </ul>
                </nav>

                <div className="container">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet velit lectus, eu tincidunt mi pulvinar ut. Curabitur pellentesque neque ut convallis facilisis. Maecenas tristique mi vel lectus volutpat, eu ultrices lacus efficitur. Praesent ac nunc convallis, semper metus eget, volutpat ex. Vivamus ac metus dapibus, vehicula diam in, hendrerit nisl. Morbi laoreet sapien et mauris blandit auctor. Aenean elementum tincidunt dapibus.
                </p>
                <p>
                Nulla dignissim felis at tristique finibus. Phasellus quis enim luctus, auctor sapien a, sollicitudin nibh. Nullam in nisi ipsum. Donec sapien dolor, consectetur sodales urna eu, consequat elementum nunc. Suspendisse tristique ac lorem ut sodales. Curabitur fringilla tristique euismod. Curabitur accumsan dolor sit amet facilisis lobortis. Vivamus pharetra lorem at nisl accumsan finibus. Aliquam sagittis tristique sem, sed elementum felis faucibus ut. Aliquam venenatis, elit et condimentum vestibulum, nulla arcu rhoncus dui, sed mollis nulla dolor ut nibh. Mauris commodo ipsum ac imperdiet venenatis. Nullam dictum dictum nisl vel euismod.
                </p>
                </div>


                </div>
               
               
        );
    }
}

export default Navbar;
