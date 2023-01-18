import { Comment } from './comment.interface';
import { VideoPost } from './video-post.interface';
import { TextPost } from './text-post.interface';
import { PhotoPost } from './photo-post.interface';
import { LinkPost } from './link-post.interface';

export interface Post {
  id?: number;
  type: string;
  createdAt?: Date;
  publishAt?: Date;
  comments: Comment[];
  videoPosts: VideoPost[];
  textPosts: TextPost[];
  photoPosts: PhotoPost[];
  linkPosts: LinkPost[];
}
