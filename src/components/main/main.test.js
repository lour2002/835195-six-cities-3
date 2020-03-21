import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";
import OFFERS from "../../mocks/test.mocks.js";


it(`Render Main`, () => {
  const place = renderer
    .create(<Main offers={ OFFERS } onPlaceCardTitleClick={() => {}} />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
