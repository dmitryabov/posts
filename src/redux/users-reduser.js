import {usersAPI} from '../api/api';

const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHINT = 'TOGGLE_IS_FETCHINT';


let initialState = {
  isFetching: true,
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
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
  ]
};
  
  
  const usersReduser = (state = initialState, action) => {
    switch (action.type) {  
      case SET_USERS: {
           return { ...state, users: action.users}
      }
      case TOGGLE_IS_FETCHINT: {
        return { ...state, isFetching: action.isFetching}
     }
  
      default: 
        return state;
   }
  }



export const setUsers = (users) => { return { type: SET_USERS, users}}
export const setIsToggleFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHINT, isFetching}}


export const getUsers = () => { 
  return (dispatch) => { 
    dispatch(setIsToggleFetching(true));
    usersAPI.getUsers().then(data => {
      dispatch(setIsToggleFetching(false))
      dispatch(setUsers(data))
  })
 }
}
  
export default usersReduser;