import { VideoPost, Comment } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogVideoPostEntity implements Entity<BlogVideoPostEntity>, VideoPost {
  public id: number;
  public title: string;
  public link: string;
  public tags: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public createdAt: Date;
  constructor(post: VideoPost) {
    this.fillEntity(post);
  }


  public fillEntity(entity: VideoPost): void {
    this.title = entity.title;
    this.link = entity.link;
    this.tags = entity.tags;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.createdAt = new Date();
  }

  public toObject(): BlogVideoPostEntity {
    return {
      ...this,
      comments: this.comments.map(({id}) => ({id}))
    };
  }

}
