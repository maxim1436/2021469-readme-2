export interface User {
  _id?: string;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
  registerDate: Date;
  postsCount: number;
  followersCount: number;
  passwordHash: string;
}
