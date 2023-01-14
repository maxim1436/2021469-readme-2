import { Expose } from 'class-transformer';

export class PhotoPostRdo {
  @Expose()
  public id: string;

  @Expose()
  public photo: string;

  @Expose()
  public tags: string;

  @Expose()
  public status: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;
}
