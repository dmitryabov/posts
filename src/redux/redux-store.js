import {createStore, combineReducers, applyMiddleware} from 'redux';
import messageReduser from './messages-reduser';
import usersReduser from './users-reduser';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    messages: messageReduser,
    users: usersReduser
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;