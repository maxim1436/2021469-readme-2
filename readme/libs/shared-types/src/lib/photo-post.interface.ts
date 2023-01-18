
export interface PhotoPost {
  id?: number;
  photo: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  status: string;
}
