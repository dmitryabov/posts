import React from 'react';
import Messages from './Messages';

 
class MessagesContainer extends React.Component {
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