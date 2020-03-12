import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from "./place-card.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onPlaceCardTitleClick = jest.fn();

  const placeComponent = shallow(<PlaceCard offer={PLACE_CARD} onPlaceCardTitleClick={onPlaceCardTitleClick}/>);

  const placeHeader = placeComponent.find(`h2.place-card__name`);

  placeHeader.simulate(`click`);

  expect(onPlaceCardTitleClick).toHaveBeenCalledTimes(1);
});
