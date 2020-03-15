import PropTypes from "prop-types";
import {PLACE_TYPE, FEATURES} from "./consts.js";
import {} from "./consts";

export const OfferShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(PLACE_TYPE)).isRequired,
  isPremium: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  roomsCount: PropTypes.number.isRequired,
  membersCount: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.oneOf(FEATURES)).isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isTrust: PropTypes.bool.isRequired,
  }).isRequired
};
