import { Comment } from './comment.interface';
// import { PostStatus } from './post-status.enum';

export interface TextPost {
  id?: number;
  title: string;
  text: string;
  announceText: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  comments: Comment[];
  status: string;
}
