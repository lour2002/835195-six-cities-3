import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import OFFERS from "../../mocks/test.mocks.js";

it(`Render App`, () => {
  const place = renderer
    .create(<App
      offers={ OFFERS }
    />)
    .toJSON();

  expect(place).toMatchSnapshot();
});
