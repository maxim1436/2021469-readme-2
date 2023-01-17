// import { Comment } from './comment.interface';

export interface PhotoPost {
  id?: number;
  photo: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  // comments: Comment[];
  status: string;
}
