import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import {RENTAL_OFFERS, OFFERS_COUNT} from "../../test.data.js";

it(`Render Place`, () => {
  const place = renderer
    .create(<App
      offersCount={OFFERS_COUNT}
      rentalOffers={RENTAL_OFFERS}
    />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
