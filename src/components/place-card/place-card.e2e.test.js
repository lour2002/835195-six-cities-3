import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from "./place-card.jsx";
import {RENTAL_OFFERS} from "../../test.data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onPlaceTitleClick = jest.fn();

  const placeComponent = shallow(<PlaceCard placeName={RENTAL_OFFERS[0]} onTitleClick={onPlaceTitleClick}/>);

  const placeHeader = placeComponent.find(`h2.place-card__name`);

  placeHeader.simulate(`click`);

  expect(onPlaceTitleClick).toHaveBeenCalledTimes(1);
});
