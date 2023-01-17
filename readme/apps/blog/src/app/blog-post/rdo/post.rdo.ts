import { Expose } from 'class-transformer';
import { TextPostRdo } from './text-post.rdo';
import { VideoPostRdo } from './video-post.rdo';
import { PhotoPostRdo } from './photo-post.rdo';
import { LinkPostRdo } from './link-post.rdo';

export class PostRdo {
  @Expose()
  public id: string;

  @Expose()
  public type: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public textPosts?: TextPostRdo[];

  @Expose()
  public videoPosts?: VideoPostRdo[];

  @Expose()
  public photoPosts?: PhotoPostRdo[];

  @Expose()
  public linkPosts?: LinkPostRdo[];

}
