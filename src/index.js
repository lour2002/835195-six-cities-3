import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const countOffers = 696;

ReactDOM.render(
    <App
      countOffers={countOffers}
    />,
    document.getElementById(`root`)
);
