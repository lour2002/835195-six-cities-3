import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";

it(`Render App`, () => {
  const place = renderer
    .create(<App
      offers={[PLACE_CARD]}
    />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
