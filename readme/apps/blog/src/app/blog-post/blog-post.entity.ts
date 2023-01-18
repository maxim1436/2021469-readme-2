import { TextPost, VideoPost, PhotoPost, LinkPost, Comment, Post } from '@readme/shared-types';
import { Entity } from '@readme/core';

export class BlogPostEntity implements Entity<BlogPostEntity>, Post {
  public id: number;
  public type: string;
  public publishAt: Date;
  public createdAt: Date;
  public videoPosts: VideoPost[];
  public textPosts: TextPost[];
  public photoPosts: PhotoPost[];
  public linkPosts: LinkPost[];
  public comments: Comment[];

  constructor(post: Post) {
    this.fillEntity(post);
  }


  public fillEntity(entity: Post): void {
    this.linkPosts = [...entity.linkPosts];
    this.textPosts = [ ...entity.textPosts];
    this.photoPosts = [...entity.photoPosts];
    this.videoPosts = [...entity.videoPosts];
    this.type = entity.type;
    this.createdAt = new Date();
    this.publishAt = new Date();
    this.comments = [];
  }

  public toObject(): BlogPostEntity {
    return {
      ...this,
      comments: this.comments.map(({id}) => ({id})),
      textPosts: this.textPosts.map(({id}) => ({id})),
      linkPosts: this.linkPosts.map(({id}) => ({id})),
      photoPosts: this.photoPosts.map(({id}) => ({id})),
      videoPosts: this.videoPosts.map(({id}) => ({id})),
    };
  }

}
