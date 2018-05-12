import React from 'react'

import Menuitem from './menuitem'
import Menutree from './menutree'


export default props => (
    <ul className="sidebar-menu">

        <Menuitem path='/' label='Dashboard' icon='dashboard'/>
        <Menutree label="Cadastro" icon="edit">
            <Menuitem path="/billingcycle" label='Ciclo de pagamentos' icon='usd'/>
        </Menutree>
    </ul>
)