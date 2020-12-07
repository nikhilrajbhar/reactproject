import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (

        <nav className="navbar">
            <ul>

                <li className="nav-item">
                    <NavLink activeClassName='menu_active'
                        className="nav-link" to="/Home">Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink activeClassName='menu_active'
                        className="nav-link" to="/Application">Apply</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='menu_active'
                        className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName='menu_active'
                        className="nav-link" to="/Status">Status</NavLink>
                </li>

            </ul>
        </nav>

    );
};

export default Navbar;



