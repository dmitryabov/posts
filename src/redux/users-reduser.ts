import { AppStateType, InferActionsTypes } from './redux-store';
import {usersAPI} from '../api/api';
import { ThunkAction } from 'redux-thunk';


type CompanyType = {
  bs: string
  catchPhrase: string
  name: string
}


export type UsersType = {
  id: number
  name: string
  username: string
  email: string
  address: any
  phone: string
  website: string
  company: CompanyType
}

export type initialStateType = typeof initialState

let initialState = {
  isFetching: true as boolean,
  users: [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
  ]as Array<UsersType>
};
  
  
  const usersReduser = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {  
      case 'SET_USERS': {
        return { ...state, users: action.users}
      }
      case 'TOGGLE_IS_FETCHINT': {
        return { ...state, isFetching: action.isFetching}
     }
  
      default: 
        return state;
   }
}


type ActionsTypes = InferActionsTypes<typeof actions>


export const actions = {
  setUsers: (users: Array<UsersType>) => ({ type: 'SET_USERS', users} as const),
  setIsToggleFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHINT', isFetching} as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>


export const getUsers = (): ThunkType => { 
  return async (dispatch) => { 
    dispatch(actions.setIsToggleFetching(true));
    const data = await usersAPI.getUsers();
    dispatch(actions.setIsToggleFetching(false))
    dispatch(actions.setUsers(data))

 }
}
  
export default usersReduser;