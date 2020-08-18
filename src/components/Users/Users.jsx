import React from 'react';
import style from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    return (
        <div>
          <h2>Responsive "Meet The Team" Section</h2>
          <p>Resize the browser window to see the effect.</p>
          <br/>
          <div className={style.row}>
          {props.users.map( user => <User key={user.id} user={user}/> )}
          </div>
        </div>
    )
}

export default Users;