import React from 'react';
import style from './Message.module.css';
import {MessagesType} from '../../../redux/messages-reduser';


type PropsType = {
  message: MessagesType
  user: any
}

const Message: React.FC<PropsType> = (props) => {
    return (
          <div className={style.container}>
            <p><span>{props.user.name}</span> {props.user.username}</p>
            <p>{props.message.title}</p>
            <p><span>{props.message.body}</span></p>
          </div>         
    )
}

export default Message;