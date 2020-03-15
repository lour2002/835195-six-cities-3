import {PLACE_TYPE, FEATURES} from '../utils/consts.js';

const offers = [
  {
    id: 1,
    name: `Beautiful &amp; luxurious apartment at great location`,
    price: 120,
    smallImage: `img/apartment-01.jpg`,
    rating: 4.6,
    isMarked: true,
    type: PLACE_TYPE.APARTMENT,
    isPremium: true,
    features: FEATURES,
    roomsCount: 3,
    membersCount: 4,
    owner: {
      name: `Angelina 1`,
      avatar: `img/avatar-angelina.jpg`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.<br>
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      isTrust: true
    }
  },
  {
    id: 2,
    name: `Wood and stone place`,
    price: 80,
    smallImage: `img/room.jpg`,
    rating: 3,
    isMarked: false,
    type: PLACE_TYPE.ROOM,
    isPremium: false,
    features: FEATURES,
    roomsCount: 4,
    membersCount: 5,
    owner: {
      name: `Angelina 1`,
      avatar: `img/avatar-angelina.jpg`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.<br>
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      isTrust: true
    }
  },
  {
    id: 3,
    name: `Canal View Prinsengracht`,
    price: 132,
    smallImage: `img/apartment-02.jpg`,
    rating: 5,
    isMarked: false,
    type: PLACE_TYPE.HOTEL,
    isPremium: false,
    features: FEATURES,
    roomsCount: 2,
    membersCount: 1,
    owner: {
      name: `Angelina 1`,
      avatar: `img/avatar-angelina.jpg`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.<br>
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      isTrust: true
    }
  },
  {
    id: 4,
    name: `Nice, cozy, warm big bed apartment`,
    price: 180,
    smallImage: `img/apartment-03.jpg`,
    rating: 4,
    isMarked: false,
    type: PLACE_TYPE.HOUSE,
    isPremium: true,
    features: FEATURES,
    roomsCount: 4,
    membersCount: 5,
    owner: {
      name: `Angelina 1`,
      avatar: `img/avatar-angelina.jpg`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.<br>
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      isTrust: true
    }
  }
];

export default offers;
