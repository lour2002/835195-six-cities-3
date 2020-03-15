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

    this._placeTitleCardClickHandler = this.placeTitleCardClickHandler.bind(this);

    this.state = {
      offer: offersMock[0]
    };
  }

  placeTitleCardClickHandler(offerId) {
    this.setState({selectedOfferId: offerId});
  }

  renderApp() {
    const {offers} = this.props;

    return (
      <Main
        offers={offers}
        onPlaceHeaderClick={this.placeTitleCardClickHandler}
      />
    );
  }

  renderOfferDetail() {
    const {offer} = this.state;

    if (offer !== null) {
      return (
        <OfferDetail offer={offer} />
      );
    }
    return this.renderApp();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/offer-detail">
            {this.renderOfferDetail()}
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
