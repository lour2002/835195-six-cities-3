import React from 'react';
import PropTypes from "prop-types";

import OffersList from "../offers-list/offers-list.jsx";
import {OfferShape} from "../../utils/settings.js";

const Main = ({offers, onPlaceCardTitleClick}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Budapest</b>
            <OffersList offers={offers} onPlaceCardTitleClick={onPlaceCardTitleClick} />
          </section>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferShape)).isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired
};

export default Main;
