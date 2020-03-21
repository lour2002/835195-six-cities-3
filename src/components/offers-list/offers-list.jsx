import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";
import {OfferShape} from "../../utils/settings";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {offer: null};

    this.placeCardMouseEnterHandler = this.placeCardMouseEnterHandler.bind(this);
    this.placeCardMouseLeaveHandler = this.placeCardMouseLeaveHandler.bind(this);
    this.placeCardTitleClickHandler = this.placeCardTitleClickHandler.bind(this);
  }

  placeCardTitleClickHandler() {

  }

  placeCardMouseEnterHandler(offer) {
    this.setState({offer});
  }

  placeCardMouseLeaveHandler(offer) {
    this.setState({offer});
  }

  render() {
    const {offers} = this.props;
    const {onPlaceCardTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onPlaceCardTitleClick={() => onPlaceCardTitleClick(offer)}
            onPlaceCardMouseEnter={() => this.placeCardMouseEnterHandler(offer)}
            onPlaceCardMouseLeave={() => this.placeCardMouseLeaveHandler(null)}
          />
        ))}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferShape)).isRequired,
  onPlaceCardTitleClick: PropTypes.func.isRequired
};

export default OffersList;
