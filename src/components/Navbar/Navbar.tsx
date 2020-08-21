import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={style.topnav}>
          <NavLink activeClassName={style.active} to="/users">Users</NavLink>
          <NavLink activeClassName={style.active} to="/">Messeges</NavLink>
        </div>
    )
}

export default Navbar;