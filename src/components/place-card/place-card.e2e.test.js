import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from "./place-card.jsx";
import {PLACE_CARD} from "../../mocks/test.mocks.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onPlaceCardTitleClick = jest.fn();
  const placeComponent = shallow(
      <PlaceCard
        offer={PLACE_CARD}
        onPlaceCardMouseEnter={() => {}}
        onPlaceCardMouseLeave={() => {}}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
      />);
  const placeTitle = placeComponent.find(`h2.place-card__name`);

  placeTitle.simulate(`click`);
  expect(onPlaceCardTitleClick.mock.calls.length).toBe(1);
});

it(`Should welcome button be pressed`, () => {
  const onPlaceCardMouseEnter = jest.fn();
  const onPlaceCardMouseLeave = jest.fn();

  const placeComponent = shallow(
      <PlaceCard
        offer={PLACE_CARD}
        onPlaceCardTitleClick={() => {}}
        onPlaceCardMouseEnter={onPlaceCardMouseEnter}
        onPlaceCardMouseLeave={onPlaceCardMouseLeave}
      />
  );

  placeComponent.simulate(`mouseenter`);
  expect(onPlaceCardMouseEnter).toHaveBeenCalledTimes(1);

  placeComponent.simulate(`mouseleave`);
  expect(onPlaceCardMouseLeave).toHaveBeenCalledTimes(1);
});
