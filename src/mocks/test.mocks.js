import {PLACE_TYPE, FEATURES} from '../utils/consts.js';

export const PLACE_CARD = {
  id: 1,
  name: `Beautiful &amp; luxurious apartment at great location`,
  price: 120,
  smallImage: `img/apartment-01.jpg`,
  rating: 4.2,
  type: PLACE_TYPE.APARTMENT,
  isPremium: true,
  roomsCount: 3,
  membersCount: 4,
  images: [
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/apartment-02.jpg`,
    `img/apartment-03.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-01.jpg`,
  ],
  features: Object.values(FEATURES),
  owner: {
    name: `Angelina 1`,
    avatar: `img/avatar-angelina.jpg`,
    description: `<p>A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.</p>
                  <p>An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.</p>`,
    isTrust: true
  }
};
