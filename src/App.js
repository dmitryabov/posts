import React from 'react';
import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Users from './components/Users/Users';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  return (
      <body>
        <Navbar />
        <div className={style.content}>
           <Route path='/messages'  render={() =>  <Messages messages={props.messages} users={props.users}/>} />
           <Route path='/users' render={() =>  <Users users={props.users}/>} />
        </div>
      </body>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    users: state.users  
  }
}

const mapDiapatchToProps = (dispatch) => {
  return {
  }
}

const AppContainer = connect(mapStateToProps, mapDiapatchToProps)(App);

export default AppContainer;
