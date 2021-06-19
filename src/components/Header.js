import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header-h1'>Country App</h1>
            <nav className='header-navigation'>
                <ul>
                    <li>
                    <NavLink to='/' exact className='nav-link' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/search' className='nav-link' activeClassName='active'>Search</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header