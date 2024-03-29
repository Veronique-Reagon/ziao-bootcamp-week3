import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/'></NavLink>Log Out</li>
            <li><NavLink to='/' className='btn btn-floating pink'></NavLink>BP</li>
        </ul>
    )

}

export default SignedInLinks