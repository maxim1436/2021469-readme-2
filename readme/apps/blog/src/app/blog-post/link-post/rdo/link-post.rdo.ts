import { Expose } from 'class-transformer';

export class LinkPostRdo {
  @Expose()
  public id: string;

  @Expose()
  public link: string;

  @Expose()
  public description: string;

  @Expose()
  public status: string;

  @Expose()
  public tags: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;
}
