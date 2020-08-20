import React from 'react';
import style from './Users.module.css';
import User from './User/User';
import {UsersType} from '../../redux/users-reduser';


type PropsType = {
  users: Array<UsersType>
}


const Users: React.FC<PropsType> = (props) => {
    return (
        <div>
          <h2>List of users</h2>
          <br/>
          <div className={style.row}>
          {props.users.map( user => <User key={user.id} user={user}/> )}
          </div>
        </div>
    )
}

export default Users;