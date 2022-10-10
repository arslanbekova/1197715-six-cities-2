import { User } from '../../types/user.js';
import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { createSHA256 } from '../../utils/common.js';

enum UserName {
  Minlength = 1,
  Maxlength = 15,
  DefaultValue = ''
}

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})
export class UserEntity extends defaultClasses.TimeStamps implements User {
  constructor(data: User) {
    super();
    this.email = data.email;
    this.avatar = data.avatar;
    this.name = data.name;
    this.userType = data.userType;
  }

  @prop({ required: true, minlength: UserName.Minlength, maxlength: UserName.Maxlength, default: UserName.DefaultValue })
  public name!: string;

  @prop({ unique: true, required: true, match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'] })
  public email!: string;

  @prop({ required: true, default: ''})
  public password!: string;

  @prop({ default: '' })
  public avatar!: string;

  @prop({ required: true })
  public userType!: string;

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
