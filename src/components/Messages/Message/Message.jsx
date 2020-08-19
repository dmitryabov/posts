import React from 'react';
import style from './Message.module.css';


const Message = (props) => {
  
    return (
          <div className={style.container}>
            <p><span>{props.user.name}</span> {props.user.username}</p>
            <p>{props.message.title}</p>
            <p><span>{props.message.body}</span></p>
          </div>         
    )
}

export default Message;