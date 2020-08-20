import React, {useState, useEffect} from 'react';
import style from './Messages.module.css';
import Message from './Message/Message';
import Preloader from '../common/Preloader/Preloader';
import {MessagesType} from '../../redux/messages-reduser';
import {UsersType} from '../../redux/users-reduser';


type PropsType = {
    messages: Array<MessagesType>
    isFetching: boolean
    users: Array<UsersType>
    user: UsersType
}

const Messages: React.FC<PropsType> = (props) => {
    let [messages, setMessages] = useState(props.messages);
    
    useEffect(() => {
        setMessages(props.messages);
    }, [props.messages]);

    const filterList = (e: any) => {
        let filteredList = props.messages.filter(function(message){
            return message.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        })
        setMessages(filteredList);
    }
 
    return (
        <div>
          {props.isFetching ? <Preloader /> : null}
          <h2>List of messages</h2>
          <div className={style.search_container}> 
            <span>messages filter on title </span>
            <input placeholder="Search.." onChange={filterList} name="search"/>
          </div>
           {messages.map( message => <Message key={message.id + message.title} 
                                              message={message} 
                                              user={props.users.find(user => user.id === message.userId)}/> )}
        </div>
    )
}

export default Messages;

