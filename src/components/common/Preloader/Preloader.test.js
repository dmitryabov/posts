import React from "react";
import renderer from "react-test-renderer";
import Preloader from "./Preloader";



it(`Render Message`, () => {
  const tree = renderer
  .create(<Preloader/>, {
    createNodeMock: ()=>{
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
