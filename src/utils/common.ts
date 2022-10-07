import crypto from 'crypto';
import { Offer } from '../types/offer.js';
import { Accomodation, City, Facility, OfferType } from './consts.js';
import { ValueOf } from '../types/common.js';

export const createOffer = (row: string): Offer => {
  const tokens = row.replace('\n', '').split('\t');
  const [
    title,
    description,
    publishedDate,
    city,
    previewImg,
    photos,
    offerType,
    rating,
    type,
    roomsCount,
    guestsCount,
    price,
    facilities,
    name,
    email,
    avatarPath,
    password,
    userType,
    commentsCount,
    latitude,
    longitude
  ] = tokens;

  return {
    title,
    description,
    publishedDate: new Date(publishedDate),
    city: city as ValueOf<City>,
    previewImg,
    photos: photos.split(';')
      .map((photo) => photo),
    offerType: offerType as ValueOf<OfferType>,
    rating: Number.parseInt(rating, 10),
    type: type as ValueOf<Accomodation>,
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';')
      .map((facility) => facility as ValueOf<Facility>),
    author: {name, email, avatar: avatarPath, password, userType},
    commentsCount: Number.parseInt(commentsCount, 10),
    coordinates: {latitude: Number(latitude), longitude: Number(longitude)}
  };
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
