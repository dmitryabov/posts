import React from 'react';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import Users from './components/Users/Users';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {getMessages} from './redux/messages-reduser';
import {getUsers} from './redux/users-reduser';


function App(props) {
  return (
      <body>
        <Navbar />
        <div className={style.content}>
           <Route path='/messages' render={() => <MessagesContainer 
                                                     messages={props.messages}
                                                     users={props.users} 
                                                     getMessages={props.getMessages}
                                                     getUsers={props.getUsers}
                                                     isFetching={props.isFetching}
                                                     />} />
           <Route path='/users' render={() => <Users users={props.users} isFetching={props.isFetching}/>} />
        </div>  
      </body>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    users: state.users.users,
    isFetching: state.messages.isFetching,
  }
}

const mapDiapatchToProps = (dispatch) => {
  return {
    getMessages: (messeges) => {
      let action = getMessages(messeges);
      dispatch(action)},
    getUsers: (users) => {
      let action = getUsers(users);
      dispatch(action)},
  }
}

const AppContainer = connect(mapStateToProps, mapDiapatchToProps)(App);

export default AppContainer;
