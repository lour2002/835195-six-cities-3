import React from 'react';
import PropTypes from "prop-types";

import {PLACE_TYPE} from '../../utils/consts.js';
import OffersList from "../offers-list/offers-list";

const Main = ({offers}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Budapest</b>
            <OffersList offers={offers} />
          </section>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    smallImage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.oneOf([PLACE_TYPE.APARTMENT, PLACE_TYPE.PRIVATE_ROOM]).isRequired,
    isPremium: PropTypes.bool.isRequired,
  })).isRequired
};

export default Main;
