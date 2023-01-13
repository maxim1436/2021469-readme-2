import {BlogPhotoPostRepository} from './blog-photo-post.repository';
import {CreatePhotoPostDto} from './dto/create-photo-post.dto';
import {PhotoPost} from '@readme/shared-types';
import {BlogPhotoPostEntity} from './blog-photo-post.entity';
import {UpdatePhotoPostDto} from './dto/update-photo-post.dto';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BlogPhotoPostService {
  constructor(
    private readonly blogPhotoPostRepository: BlogPhotoPostRepository,
  ) {}

  async createPhotoPost(dto: CreatePhotoPostDto): Promise<PhotoPost> {
    const photoPostEntity = new BlogPhotoPostEntity({ ...dto, comments:[]});
    return this.blogPhotoPostRepository.create(photoPostEntity);
  }

  async deletePhotoPost(id: number): Promise<void> {
    this.blogPhotoPostRepository.destroy(id);
  }

  async getPhotoPost(id: number): Promise<PhotoPost> {
    return this.blogPhotoPostRepository.findById(id);
  }

  async getPhotoPosts(): Promise<PhotoPost[]> {
    return this.blogPhotoPostRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updatePhotoPost(id: number, dto: UpdatePhotoPostDto): Promise<PhotoPost> {
    throw new Error('Not implemented…');
  }

}
