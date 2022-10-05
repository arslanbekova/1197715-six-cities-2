import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { City, Accomodation, Facility, PremiumType } from '../../utils/consts.js';

const {prop, modelOptions} = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: 10, maxlength: 100, trim: true })
  public title!: string;

  @prop({ required: true, minlength: 20, maxlength: 1024, trim: true })
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
  }) // how to limit it
  public photos!: string[];

  @prop({
    required: true,
    type: () => String,
    enum: PremiumType
  })
  public isPremium!: PremiumType;

  @prop({
    required: true,
    type: () => Number,
    min: 1,
    max: 5
  })
  public rating!: number; // how to type float numbers

  @prop({
    required: true,
    type: () => String,
    enum: Accomodation
  })
  public type!: Accomodation;

  @prop({
    required: true,
    type: () => Number,
    min: 1,
    max: 8
  })
  public roomsCount!: number;

  @prop({
    required: true,
    type: () => Number,
    min: 1,
    max: 10
  })
  public guestsCount!: number;

  @prop({
    required: true,
    type: () => Number,
    min: 100,
    max: 100000
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
  public userId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentsCount!: number;

  @prop({
    required: true,
    type: () => [Number] // how to type float number?
  })
  public coordinates!: number[]; // should I create another collection for coords?
}

export const OfferModel = getModelForClass(OfferEntity);
