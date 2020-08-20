import { AppStateType } from './redux-store';
import {messegesAPI} from '../api/api';
import { ThunkAction } from 'redux-thunk';

const SET_MESSAGES = 'SET_MESSAGES';
const TOGGLE_IS_FETCHINT = 'TOGGLE_IS_FETCHINT';


export type MessagesType = {
  userId: number
  id: number
  title: string
  body: string
}

export type initialStateType = typeof initialState

let initialState = {
  isFetching: true as boolean,
  messages: [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  } 
] as Array<MessagesType>
}



const messagesReduser = (state = initialState, action: any): initialStateType => { 
  switch (action.type) {  
    case SET_MESSAGES: {
         return { ...state, messages: action.messages}
    }
    case TOGGLE_IS_FETCHINT: {
      return { ...state, isFetching: action.isFetching}
   }
    default: 
      return state;
 }
}


type ActionsTypes = SetMessagesType | SetIsToggleFetchingType

type SetMessagesType = {
  type: typeof SET_MESSAGES
  messages: MessagesType
}

type SetIsToggleFetchingType = {
  type: typeof TOGGLE_IS_FETCHINT
  isFetching: boolean
}

export const setMessages = (messages: MessagesType): SetMessagesType => { return { type: SET_MESSAGES, messages}}
export const setIsToggleFetching = (isFetching: boolean): SetIsToggleFetchingType => { return { type: TOGGLE_IS_FETCHINT, isFetching}}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getMessages = (): ThunkType => { 
  return async (dispatch) => { 
    dispatch(setIsToggleFetching(true));
    const data = await messegesAPI.getMessages();
    dispatch(setIsToggleFetching(false))
    dispatch(setMessages(data))
 }
};


export default messagesReduser;