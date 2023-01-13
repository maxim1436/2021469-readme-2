import { Expose } from 'class-transformer';

export class VideoPostRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public link: string;

  @Expose()
  public tags: string;

  @Expose()
  public status: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;
}
