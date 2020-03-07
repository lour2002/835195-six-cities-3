import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {RENTAL_OFFERS, OFFERS_COUNT} from "../../test.data";


it(`Render Place`, () => {
  const place = renderer
    .create(<Main
      offersCount={OFFERS_COUNT}
      rentalOffers={RENTAL_OFFERS}
    />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
