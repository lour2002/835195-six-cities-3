import {MAX_RATING} from "./consts";

export const calcRatingPercent = (rating) => Math.floor(rating) * 100 / MAX_RATING;
