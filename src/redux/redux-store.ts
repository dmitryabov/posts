import {createStore, combineReducers, applyMiddleware} from 'redux';
import messageReduser from './messages-reduser';
import usersReduser from './users-reduser';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    messages: messageReduser,
    users: usersReduser
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;