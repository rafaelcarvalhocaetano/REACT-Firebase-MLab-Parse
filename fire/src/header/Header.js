import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <i className="fas fa-user-circle"></i>
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Sing Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
};

export default Header;
