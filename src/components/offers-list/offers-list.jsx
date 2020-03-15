import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";
import {PLACE_TYPE} from '../../utils/consts.js';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {offer: null};

    this._placeCardMouseEnterHandler = this._placeCardMouseEnterHandler.bind(this);
    this._placeCardMouseLeaveHandler = this._placeCardMouseLeaveHandler.bind(this);
    this._placeCardTitleClickHandler = this._placeCardTitleClickHandler.bind(this);
  }

  _placeCardTitleClickHandler() {}

  _placeCardMouseEnterHandler(offer) {
    this.setState({offer});
  }

  _placeCardMouseLeaveHandler(offer) {
    this.setState({offer});
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onPlaceCardTitleClick={this._placeCardTitleClickHandler}
            onPlaceCardMouseEnter={this._placeCardMouseEnterHandler}
            onPlaceCardMouseLeave={this._placeCardMouseLeaveHandler}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
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

export default OffersList;
