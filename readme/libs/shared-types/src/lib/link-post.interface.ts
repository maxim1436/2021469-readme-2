// import { Comment } from './comment.interface';

export interface LinkPost {
  id?: number;
  link: string;
  description: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  // comments: Comment[];
  status: string;
}
