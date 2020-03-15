import React from 'react';
import PropTypes from "prop-types";

import Main from "../main/main.jsx";
import {PLACE_TYPE} from '../../utils/consts.js';

const App = ({offers}) => {
  return <Main
    offers={offers}
  />;
};

App.propTypes = {
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

export default App;
