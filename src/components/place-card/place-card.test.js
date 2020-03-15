import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";

it(`Render PlaceCard`, () => {
  const placeCard = renderer.create(
      <PlaceCard
        offer={PLACE_CARD}
        onPlaceCardTitleClick={() =>{}}
        onPlaceCardMouseEnter={() =>{}}
        onPlaceCardMouseLeave={() =>{}}
      />
  ).toJSON();

  expect(placeCard).toMatchSnapshot();
});
