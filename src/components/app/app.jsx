import React from 'react';
import Main from "../main/main.jsx";
// eslint-disable-next-line react/prop-types
const App = ({offersCount, rentalOffers}) => {
  return <Main
    offersCount={offersCount}
    rentalOffers={rentalOffers}
  />;
};

export default App;
