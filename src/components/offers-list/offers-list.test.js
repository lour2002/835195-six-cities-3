import React from "react";
import renderer from "react-test-renderer";

import OffersList from "./offers-list.jsx";
import OFFERS from "../../mocks/test.mocks.js";


it(`Render OffersList`, () => {
  const place = renderer
    .create(<OffersList offers={ OFFERS } onPlaceCardTitleClick={()=> {}}/>)
    .toJSON();

  expect(place).toMatchSnapshot();
});
