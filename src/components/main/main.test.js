import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";


it(`Render Main`, () => {
  const place = renderer
    .create(<Main offers={ [PLACE_CARD] }/>)
    .toJSON();

  expect(place).toMatchSnapshot();
});
