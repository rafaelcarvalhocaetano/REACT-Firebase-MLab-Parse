import React from 'react'
import { Link } from 'react-router-dom'


export default props => (
    <li>
        <Link to={props.path}>
            {props.label}
        </Link>
    </li>
)