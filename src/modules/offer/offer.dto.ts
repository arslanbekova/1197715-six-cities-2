import { Coordinates } from '../../types/coorditates.js';
import { Accomodation, City, Facility, OfferType } from '../../utils/consts.js';
import { ValueOf } from '../../types/common.js';
export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public publishedDate!: Date;
  public city!: ValueOf<City>;
  public previewImg!: string;
  public photos!: string[];
  public offerType!: ValueOf<OfferType>;
  public rating!: number;
  public type!: ValueOf<Accomodation>;
  public roomsCount!: number;
  public guestsCount!: number;
  public price!: number;
  public facilities!: ValueOf<Facility>[];
  public authorId!: string;
  public coordinates!: Coordinates;
}
