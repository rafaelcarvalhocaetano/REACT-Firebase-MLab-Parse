import React from 'react';
import Filho from './Children';

export default props => 
    <div>
        <h1>{props.nome} - {props.snome} </h1>
        <ul>
            <li>
                <Filho nome="Heitor" snome={props.snome} />
            </li>
            <li>
                <Filho {...props} />
            </li>
            <li>
                <Filho {...props} nome="Vitor" />
            </li>
        </ul>
    </div>
