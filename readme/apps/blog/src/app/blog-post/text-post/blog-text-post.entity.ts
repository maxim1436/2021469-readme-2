// import { TextPost } from '@readme/shared-types';
// import { Entity } from '@readme/core';
// // import { PostStatus } from 'libs/shared-types/src/lib/post-status.enum';

// export class BlogTextPostEntity implements Entity<BlogTextPostEntity>, TextPost {
//   public id: number;
//   public title: string;
//   public announceText: string;
//   public text: string;
//   public publishAt: Date;
//   public createdAt: Date;
//   public userId: string;
//   // public comments: Comment[];
//   public tags: string;
//   public status: string;
//   // public post_id: number;
//   constructor(post: TextPost) {
//     this.fillEntity(post);
//   }


//   public fillEntity(entity: TextPost): void {
//     this.title = entity.title;
//     this.announceText = entity.announceText;
//     this.text = entity.text;
//     this.tags = entity.tags;
//     this.userId = entity.userId;
//     // this.comments = [];
//     // this.post_id = entity.post_id;
//     this.status = entity.status;
//     this.createdAt = new Date();
//     this.publishAt = new Date();
//   }

//   public toObject(): BlogTextPostEntity {
//     return {
//       ...this
//     };
//   }

// }
