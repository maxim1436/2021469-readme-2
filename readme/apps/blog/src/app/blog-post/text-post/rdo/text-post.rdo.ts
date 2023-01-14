import { Expose } from 'class-transformer';


export class TextPostRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public announceText: string;

  @Expose()
  public text: string;

  @Expose()
  public tags: string;

  @Expose()
  public status: string;

  @Expose()
  public publishAt: string;

  @Expose()
  public userId: string;

}
