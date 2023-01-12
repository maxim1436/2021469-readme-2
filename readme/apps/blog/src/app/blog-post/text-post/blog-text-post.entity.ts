import { TextPost, Comment } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogTextPostEntity implements Entity<BlogTextPostEntity>, TextPost {
  public id: number;
  public title: string;
  public announceText: string;
  public text: string;
  public publishAt: Date;
  public userId: string;
  // public comments?: Comment[];
  public createdAt: Date;
  public tags: string;
  constructor(post: TextPost) {
    this.fillEntity(post);
  }


  public fillEntity(entity: TextPost): void {
    this.title = entity.title;
    this.announceText = entity.announceText;
    this.text = entity.text;
    this.tags = entity.tags;
    this.publishAt = new Date();
    this.userId = entity.userId;
    // this.comments = [];
    this.createdAt = new Date();
  }

  public toObject(): BlogTextPostEntity {
    return {
      ...this,
      // comments: this.comments.map(({id}) => ({id}))
    };
  }

}
