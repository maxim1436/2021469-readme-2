
export interface VideoPost {
  id?: number;
  title: string;
  link: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  status: string;
}
