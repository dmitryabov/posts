import {createStore, combineReducers} from 'redux';
import messageReduser from './messages-reduser';
import usersReduser from './users-reduser';


const reducers = combineReducers({
    messages: messageReduser,
    users: usersReduser
})

const store = createStore(reducers);

window.store = store;
export default store;