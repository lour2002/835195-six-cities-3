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
  const onPlaceCardMouseEnter = jest.fn();
  const onPlaceCardMouseLeave = jest.fn();

  const placeComponent = shallow(
      <PlaceCard
        offer={PLACE_CARD}
        onPlaceCardTitleClick={onPlaceCardTitleClick}
        onPlaceCardMouseEnter={onPlaceCardMouseEnter}
        onPlaceCardMouseLeave={onPlaceCardMouseLeave}
      />
  );

  const placeTitle = placeComponent.find(`h2.place-card__name`);
  const placeCard = placeComponent.find(`article.place-card`);

  placeTitle.simulate(`click`);
  expect(onPlaceCardTitleClick).toHaveBeenCalledTimes(1);

  placeCard.simulate(`mouseenter`);
  expect(onPlaceCardMouseEnter).toHaveBeenCalledTimes(1);
  expect({value: onPlaceCardMouseEnter.mock.calls[0][0].id}).toMatchObject({value: PLACE_CARD.id});

  placeCard.simulate(`mouseleave`);
  expect(onPlaceCardMouseLeave).toHaveBeenCalledTimes(1);
  expect({value: onPlaceCardMouseLeave.mock.calls[0][0]}).toMatchObject({value: null});
});
