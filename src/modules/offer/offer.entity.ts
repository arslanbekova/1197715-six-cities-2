import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { City, Accomodation, Facility, OfferType, Rating, Room, Guest, Price } from '../../utils/consts.js';

enum OfferTitle {
  minlength = 10,
  maxlength = 100,
}

enum OfferDescription {
  minlength = 20,
  maxlength = 1024,
}

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

class Coordinates {
  @prop()
  public latitude!: number;

  @prop()
  public longitude!: number;
}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: OfferTitle.minlength, maxlength: OfferTitle.maxlength, trim: true })
  public title!: string;

  @prop({ required: true, minlength: OfferDescription.minlength, maxlength: OfferDescription.maxlength, trim: true })
  public description!: string;

  @prop({ required: true })
  public publishedDate!: Date;

  @prop({
    required: true,
    type: () => String,
    enum: City
  })
  public city!: City;

  @prop({ required: true })
  public previewImg!: string;

  @prop({
    required: true,
    type: () => [String],
    validate: {
      validator: (v: string[]) => v.length === 6,
      message: 'There should always be 6 photos!'
    }
  }) // how to limit array itmes?
  public photos!: string[];

  @prop({
    required: true,
    type: () => String,
    enum: OfferType
  })
  public offerType!: OfferType;

  @prop({
    required: true,
    type: () => Number,
    min: Rating.Min,
    max: Rating.Max
  })
  public rating!: number; // how to type float numbers?

  @prop({
    required: true,
    type: () => String,
    enum: Accomodation
  })
  public type!: Accomodation;

  @prop({
    required: true,
    type: () => Number,
    min: Room.MinCount,
    max: Room.MaxCount
  })
  public roomsCount!: number;

  @prop({
    required: true,
    type: () => Number,
    min: Guest.MinCount,
    max: Guest.MaxCount
  })
  public guestsCount!: number;

  @prop({
    required: true,
    type: () => Number,
    min: Price.Min,
    max: Price.Max
  })
  public price!: number;

  @prop({
    required: true,
    type: () => [String],
    enum: Facility
  })
  public facilities!: Facility[];

  @prop({
    ref: UserEntity,
    required: true,
  })
  public authorId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    required: true
  })
  public coordinates!: Coordinates; // should I create another collection/model for coords to use it like Ref?
}

export const OfferModel = getModelForClass(OfferEntity);
