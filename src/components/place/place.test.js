import React from "react";
import renderer from "react-test-renderer";

import Place from "./place.jsx";
import {RENTAL_OFFERS} from "../../test.data.js";


it(`Render Place`, () => {
  const place = renderer
    .create(<Place
      placeName={RENTAL_OFFERS[0]}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
