import React from "react";
import renderer from "react-test-renderer";
import Users from "./Users";


const users = [
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
];


it(`Render Users`, () => {
  const tree = renderer
  .create(<Users
    isFetching={true}
    users={users}
    
  />, {
    createNodeMock: ()=>{
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
