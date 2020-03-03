import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const offersCount = 3;
const rentalOffers = [
  `Beautiful & luxurious apartment at great location`,
  `Canal View Prinsengracht`,
  `Wood and stone place`
];

ReactDOM.render(
    <App
      offersCount={offersCount}
      rentalOffers={rentalOffers}
    />,
    document.getElementById(`root`)
);
