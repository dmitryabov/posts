import React from 'react';
import Messages from './Messages';
import {MessagesType} from '../../redux/messages-reduser';
import {UsersType} from '../../redux/users-reduser';


type PropsType = {
   getMessages: () => void
   getUsers: () => void
   messages: Array<MessagesType>
   isFetching: boolean
   users: Array<UsersType>
   user: UsersType
}

 
class MessagesContainer extends React.Component<PropsType> {
   refreshProfile () {  
      this.props.getMessages();
      this.props.getUsers();
   }

   componentDidMount () {
      this.refreshProfile()
   } 
   
   render () { 
     return <Messages { ...this.props} />
   }
}






export default MessagesContainer;