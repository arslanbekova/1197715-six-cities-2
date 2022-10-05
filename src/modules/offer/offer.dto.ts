import { Accomodation, City, Facility } from '../../utils/consts.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public publishedDate!: Date;
  public city!: City;
  public previewImg!: string;
  public photos!: string[];
  public isPremium!: string;
  public rating!: number;
  public type!: Accomodation;
  public roomsCount!: number;
  public guestsCount!: number;
  public price!: number;
  public facilities!: Facility[];
  public author!: string;
  public coordinates!: number[];
}
