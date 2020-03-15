import React from "react";
import renderer from "react-test-renderer";

import OffersList from "./offers-list.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";


it(`Render OffersList`, () => {
  const place = renderer
    .create(<OffersList offers={ [PLACE_CARD] }/>)
    .toJSON();

  expect(place).toMatchSnapshot();
});
