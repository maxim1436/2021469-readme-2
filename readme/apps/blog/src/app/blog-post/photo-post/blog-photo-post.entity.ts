import { PhotoPost, Comment } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogPhotoPostEntity implements Entity<BlogPhotoPostEntity>, PhotoPost {
  public id: number;
  public photo: string;
  public tags: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public createdAt: Date;
  constructor(post: PhotoPost) {
    this.fillEntity(post);
  }


  public fillEntity(entity: PhotoPost): void {
    this.tags = entity.tags;
    this.photo = entity.photo;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.createdAt = new Date();
  }

  public toObject(): BlogPhotoPostEntity {
    return {
      ...this,
      comments: this.comments.map(({id}) => ({id}))
    };
  }

}
