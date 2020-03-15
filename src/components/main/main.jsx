import React from 'react';
import PropTypes from "prop-types";

import OffersList from "../offers-list/offers-list";
import {OfferShape} from "../../utils/settings";

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
  offers: PropTypes.arrayOf(PropTypes.shape(OfferShape)).isRequired
};

export default Main;
