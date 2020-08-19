import {messegesAPI} from '../api/api';

const SET_MESSAGES = 'SET_MESSAGES';
const TOGGLE_IS_FETCHINT = 'TOGGLE_IS_FETCHINT';


let initialState = {
  isFetching: true,
  messages: [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 2,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
]
}


const messagesReduser = (state = initialState, action) => { 
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


export const setMessages = (messages) => { return { type: SET_MESSAGES, messages}}
export const setIsToggleFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHINT, isFetching}}


export const getMessages = () => { 
  return (dispatch) => { 
    dispatch(setIsToggleFetching(true));
    messegesAPI.getMessages().then(data => {
      dispatch(setIsToggleFetching(false))
      dispatch(setMessages(data))
  })
 }
};


export default messagesReduser;