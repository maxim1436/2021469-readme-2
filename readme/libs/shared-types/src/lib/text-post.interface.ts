
export interface TextPost {
  id?: number;
  title: string;
  text: string;
  announceText: string;
  tags: string;
  createdAt?: Date;
  publishAt?: Date;
  userId: string;
  status: string;
}
