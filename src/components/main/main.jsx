import React from 'react';
import PropTypes from "prop-types";
import Place from "../place/place.jsx";

const onPlaceTitleClick = () => {};

const Main = ({offersCount, rentalOffers}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersCount} places to stay in Budapest</b>
            <div className="cities__places-list places__list tabs__content">
              {rentalOffers.map((rentalOffer, index) => (
                <Place
                  key={rentalOffer + index}
                  placeName={rentalOffer}
                  onTitleClick={onPlaceTitleClick}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired,
  rentalOffers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;
