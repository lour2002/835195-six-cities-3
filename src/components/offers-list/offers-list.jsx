import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";
import {OfferShape} from "../../utils/settings";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {offer: null};

    this._placeCardMouseEnterHandler = this.placeCardMouseEnterHandler.bind(this);
    this._placeCardMouseLeaveHandler = this.placeCardMouseLeaveHandler.bind(this);
    this._placeCardTitleClickHandler = this.placeCardTitleClickHandler.bind(this);
  }

  placeCardTitleClickHandler() {}

  placeCardMouseEnterHandler(offer) {
    this.setState({offer});
  }

  placeCardMouseLeaveHandler(offer) {
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
            onPlaceCardTitleClick={this.placeCardTitleClickHandler}
            onPlaceCardMouseEnter={this.placeCardMouseEnterHandler}
            onPlaceCardMouseLeave={this.placeCardMouseLeaveHandler}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferShape)).isRequired
};

export default OffersList;
