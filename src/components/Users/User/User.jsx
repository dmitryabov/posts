import React from 'react';
import style from './User.module.css';

const User = (props) => {
    return (
        <div className={style.column}>
              <div className={style.card}>
                <div className={style.container}>
                  <h2>{props.user.name}</h2>
                  <p><span className={style.title}>email:</span> {props.user.email}</p>
                  <p><span className={style.title}>address:</span></p>
                  <p><span className={`${style.title} ${style.details}`}>street:</span> {props.user.address.street}</p>
                  <p><span className={`${style.title} ${style.details}`}>suite:</span> {props.user.address.suite}</p>
                  <p><span className={`${style.title} ${style.details}`}>city:</span> {props.user.address.city}</p>
                  <p><span className={`${style.title} ${style.details}`}>zipcode:</span> {props.user.address.zipcode}</p>
                  <p><span className={style.title}>phone:</span> {props.user.phone}</p>
                  <p><span className={style.title}>website:</span> {props.user.website}</p>
                </div>
              </div>
            </div>
    )
}


export default User;

