export const CITY_COORDINATES = {
  Paris: {
    latitude: 48.85661,
    longitude: 2.351499,
  },
  Cologne: {
    latitude: 50.938361,
    longitude: 6.959974,
  },
  Brussels: {
    latitude: 50.846557,
    longitude: 4.351697,
  },
  Amsterdam: {
    latitude: 52.370216,
    longitude: 4.895168,
  },
  Hamburg: {
    latitude: 53.550341,
    longitude: 10.000654,
  },
  Dusseldorf: {
    latitude: 51.225402,
    longitude: 6.776314,
  },
};

export enum Accomodation {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel',
}

export enum Facility {
  Breakfast = 'breakfast',
  AC = 'air conditioning',
  WorkPlace = 'laptop friendly workspace',
  BabySeat = 'baby seat',
  Washer = 'washer',
  Towels = 'towels',
  Fridge = 'fridge',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum OfferType {
  Pro = 'pro',
  Basic = 'basic'
}

export enum UserType {
  Pro = 'pro',
  Basic = 'basic'
}

export enum Rating {
  Min = 1,
  Max = 5,
  NumAfterDigit = 1,
}
export enum Room {
  MinCount = 1,
  MaxCount = 8,
}
export enum Guest {
  MinCount = 1,
  MaxCount = 10,
}
export enum Price {
  Min = 100,
  Max = 100000,
}

export const Component = {
  Application: Symbol.for('Application'),
  LoggerInterface: Symbol.for('LoggerInterface'),
  ConfigInterface: Symbol.for('ConfigInterface'),
  DatabaseInterface: Symbol.for('DatabaseInterface'),
  UserServiceInterface: Symbol.for('UserServiceInterface'),
  UserModel: Symbol.for('UserModel'),
  OfferServiceInterface: Symbol.for('OfferServiceInterface'),
  OfferModel: Symbol.for('OfferModel')
} as const;
