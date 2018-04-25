import React, { Component } from 'react'

import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import { Todo } from '../todo/todo';
import { About } from '../about/about';

export class Menu extends Component {
    render() {
        return (

            <nav className="navbar navbar-inverse bg-inverse">
                <Link className="navbar-brand" to="/">
                    <i className="fa fa-calendar-check-o"></i> Cursos
                    </Link>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/todos" replace>Lista de Curso</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Menu
