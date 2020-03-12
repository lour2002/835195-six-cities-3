import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";

it(`Render Place Card`, () => {
  const placeCard = renderer
    .create(<PlaceCard
      offer={PLACE_CARD}
      onPlaceCardTitleClick={() =>{}}
    />)
    .toJSON();

  expect(placeCard).toMatchSnapshot();
});
