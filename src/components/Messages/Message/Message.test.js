import React from "react";
import renderer from "react-test-renderer";
import Message from "./Message";


const user =
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
  }
};

const message =
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}


it(`Render Message`, () => {
  const tree = renderer
  .create(<Message
    message={message}
    user={user}
  />, {
    createNodeMock: ()=>{
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
