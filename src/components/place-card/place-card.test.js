import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";
import {RENTAL_OFFERS} from "../../test.data.js";


it(`Render Place Card`, () => {
  const placeCard = renderer
    .create(<PlaceCard
      placeName={RENTAL_OFFERS[0]}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
