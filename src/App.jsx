import React from 'react';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import MessagesContainer from './components/Messages/MessagesContainer';
import Users from './components/Users/Users';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {getMessages} from './redux/messages-reduser';
import {getUsers} from './redux/users-reduser';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';



const App = (props) => {
  return (
      <div>
        <Navbar />
        <div className={style.content}>
           <Redirect from="/" to="/messages" />
           <Route exact path='/messages' render={() => <MessagesContainer {...props}/>} />
           <Route path='/users' render={() => <Users users={props.users} isFetching={props.isFetching}/>} />
        </div>  
      </div>
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

const MainApp = (props) => {
 return <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default MainApp;
