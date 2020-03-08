import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {RENTAL_OFFERS, OFFERS_COUNT} from "./test.data.js";

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
      rentalOffers={RENTAL_OFFERS}
    />,
    document.getElementById(`root`)
);
