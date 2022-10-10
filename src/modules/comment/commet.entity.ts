import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';
import { Rating } from '../../utils/consts.js';

enum Comment {
  MinLength = 1,
  MaxLegtn = 1024,
}

const { prop, modelOptions } = typegoose;

export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: Comment.MinLength, maxlength: Comment.MaxLegtn, trim: true })
  public text!: string;

  @prop({ required: true })
  public publishedDate!: Date;

  @prop({
    required: true,
    type: () => Number,
    min: Rating.Min,
    max: Rating.Max
  })
  public rating!: number; // how to type float numbers?

  @prop({
    ref: UserEntity,
    required: true,
  })
  public authorId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(CommentEntity);
