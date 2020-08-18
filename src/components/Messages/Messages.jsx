import React from 'react';
import Message from './Message/Message';

const Messages = (props) => {
    return (
        <div>
          <h2>List of messages</h2>
           {props.messages.map( message => <Message key={message.id} message={message}/> )}
        </div>
    )
}

export default Messages;