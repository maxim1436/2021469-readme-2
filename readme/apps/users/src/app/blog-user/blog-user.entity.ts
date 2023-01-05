import { User } from '@readme/shared-types';
import { compare, genSalt, hash } from 'bcrypt';

const SALT_ROUNDS = 10;

export class BlogUserEntity implements User {
  public _id: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar: string;
  public registerDate: Date;
  public postsCount: number;
  public followersCount: number;
  public passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.avatar = blogUser.avatar;
    this.email = blogUser.email;
    this.firstname = blogUser.firstname;
    this.lastname  = blogUser.lastname;
    this.followersCount = blogUser.followersCount;
    this.postsCount = blogUser.postsCount;
    this.registerDate = blogUser.registerDate;
    this.passwordHash = blogUser.passwordHash;
  }

}
