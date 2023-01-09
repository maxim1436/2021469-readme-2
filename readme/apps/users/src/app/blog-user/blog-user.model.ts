import { Document } from 'mongoose';
import { User } from '@readme/shared-types';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'users',
})
export class BlogUserModel extends Document implements User {
  @Prop()
  public _id: string;

  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public registerDate: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
  })
  public followersCount: number;

  @Prop({
    required: true,
  })
  public postsCount: number;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
