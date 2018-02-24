import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-dark bg-dark">
                   <i className="fab fa-adn"></i>
                    <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                </nav>
                )
            }
        }
        
export default Header;