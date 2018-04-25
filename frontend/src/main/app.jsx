import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/style.css'

import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'

import Menu from '../template/menu'
import Rotas from './rotas'

export default props => (
    <HashRouter>
        <div className='container'>
            <Menu />
            <Rotas />
        </div>
    </HashRouter>
)