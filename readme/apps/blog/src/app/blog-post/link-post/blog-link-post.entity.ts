import { LinkPost, Comment } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogLinkPostEntity implements Entity<BlogLinkPostEntity>, LinkPost {
  public id: number;
  public link: string;
  public description: string;
  public tags: string;
  public publishAt: Date;
  public userId: string;
  public comments: Comment[];
  public createdAt: Date;
  constructor(post: LinkPost) {
    this.fillEntity(post);
  }

  public fillEntity(entity: LinkPost): void {
    this.description = entity.description;
    this.link = entity.link;
    this.tags = entity.tags;
    this.publishAt = new Date();
    this.userId = entity.userId;
    this.comments = [];
    this.createdAt = new Date();
  }

  public toObject(): BlogLinkPostEntity {
    return {
      ...this,
      comments: this.comments.map(({id}) => ({id}))
    };
  }

}
