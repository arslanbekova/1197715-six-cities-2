import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/user.entity.js';

const {prop, modelOptions} = typegoose;

export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments'
  }
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: 5, maxlength: 1024, trim: true })
  public text!: string;

  @prop({ required: true })
  public publishedDate!: Date;

  @prop({
    required: true,
    type: () => Number,
    min: 1,
    max: 5
  })
  public rating!: number; // how to type float numbers

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(CommentEntity);
