import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={style.topnav}>
          <NavLink activeClassName={style.active} to="/users">Users</NavLink>
          <NavLink activeClassName={style.active} to="/messages">Messeges</NavLink>
          <div className={style.search_container}>  
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i className={`${style.fa} ${style.fa_search}`}></i></button>
          </form>
          </div>
        </div>
    )
}

export default Navbar;