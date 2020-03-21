import React from "react";
import renderer from "react-test-renderer";

import OfferDetail from "./offer-detail.jsx";
import {PLACE_CARD_2} from "../../mocks/test.mocks.js";

it(`Render PlaceCard`, () => {
  const placeCard = renderer.create(
      <OfferDetail
        offer={PLACE_CARD_2}
      />
  ).toJSON();

  expect(placeCard).toMatchSnapshot();
});
