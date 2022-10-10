import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.js';
import { Accomodation, Facility, City, OfferType, UserType, Rating, Room, Guest, Price } from '../../utils/consts.js';
import { generateRandomValue, getRandomItem, getRandomItems, getRandomString } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

enum WeekDay {
  First = 1,
  Last = 7
}

enum Coordinate {
  Min = 4,
  Max = 50,
  NumAfterDigit = 6,
}

enum Comment {
  MinCount = 1,
  MaxCount = 5
}
export class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const publishedDate = dayjs().subtract(generateRandomValue(WeekDay.First, WeekDay.Last), 'day').toISOString();
    const city = getRandomItem<string>(Object.values(City));
    const previewImg = getRandomItem<string>(this.mockData.previewImgs);
    const photos = this.mockData.photos.join(';');
    const offerType = getRandomItem<string>(Object.values(OfferType));
    const rating = generateRandomValue(Rating.Min, Rating.Max, Rating.NumAfterDigit);
    const type = getRandomItem<string>(Object.values(Accomodation));
    const roomsCount = generateRandomValue(Room.MinCount, Room.MaxCount);
    const guestsCount = generateRandomValue(Guest.MinCount, Guest.MaxCount);
    const price = generateRandomValue(Price.Min, Price.Max);
    const facilities = getRandomItems<string>(Object.values(Facility)).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomString();
    const userType = getRandomItem<string>(Object.values(UserType));
    const commentsCount = generateRandomValue(Comment.MinCount, Comment.MaxCount);
    const latitude = generateRandomValue(Coordinate.Min, Coordinate.Max, Coordinate.NumAfterDigit);
    const longitude = generateRandomValue(Coordinate.Min, Coordinate.Max, Coordinate.NumAfterDigit);

    return [
      title, description, publishedDate, city, previewImg,
      photos, offerType, rating, type, roomsCount, guestsCount,
      price, facilities, name, email, avatarPath, password, userType,
      commentsCount, latitude, longitude
    ].join('\t');
  }
}
