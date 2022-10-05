import { User } from './user.js';
import { Accomodation, City, Facility, OfferType } from '../utils/consts.js';
import { Coordinates } from './coorditates.js';
import { ValueOf } from './common.js';

export type Offer = {
  title: string;
  description: string;
  publishedDate: Date;
  city: ValueOf<City>;
  previewImg: string;
  photos: string[];
  offerType: ValueOf<OfferType>;
  rating: number;
  type: ValueOf<Accomodation>;
  roomsCount: number;
  guestsCount: number;
  price: number;
  facilities: ValueOf<Facility>[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
}
