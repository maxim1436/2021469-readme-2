// import { Comment } from './comment.interface';

export interface VideoPost {
  id?: number;
  title: string;
  link: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  // comments: Comment[];
  status: string;
}
