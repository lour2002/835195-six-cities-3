import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferDetail from "../offer-detail/offer-detail.jsx";
import {OfferShape} from "../../utils/settings.js";
import offersMock from "../../mocks/offers.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.placeCardTitleClickHandler = this.placeCardTitleClickHandler.bind(this);

    this.state = {
      offer: null
    };
  }

  placeCardTitleClickHandler(offer) {
    this.setState({offer});
  }

  renderMain() {
    const {offers} = this.props;

    return (
      <Main
        offers={offers}
        onPlaceCardTitleClick={this.placeCardTitleClickHandler}
      />
    );
  }

  renderApp() {
    const {offer} = this.state;

    if (offer !== null) {
      return (
        <OfferDetail offer={offer} />
      );
    }
    return this.renderMain();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/offer-detail">
            <OfferDetail offer={offersMock[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(OfferShape)).isRequired
};

export default App;
