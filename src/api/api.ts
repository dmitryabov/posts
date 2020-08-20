import Axios from 'axios';


const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://jsonplaceholder.typicode.com/`,
})

export const messegesAPI = {
    getMessages () {
       return instance.get(`posts`).then( response => {return response.data})
     }
};

export const usersAPI = {
  getUsers () {
     return instance.get(`users`).then( response => {return response.data})
   }
}
