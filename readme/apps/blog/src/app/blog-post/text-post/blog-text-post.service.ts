import {BlogTextPostRepository} from './blog-text-post.repository';
import {CreateTextPostDto} from './dto/create-text-post.dto';
import {TextPost} from '@readme/shared-types';
import {BlogTextPostEntity} from './blog-text-post.entity';
import {UpdateTextPostDto} from './dto/update-text-post.dto';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BlogTextPostService {
  constructor(
    private readonly blogTextPostRepository: BlogTextPostRepository,
  ) {}

  async createTextPost(dto: CreateTextPostDto): Promise<TextPost> {
    const textPostEntity = new BlogTextPostEntity({ ...dto, comments: []});
    return this.blogTextPostRepository.create(textPostEntity);
  }

  async deleteTextPost(id: number): Promise<void> {
    this.blogTextPostRepository.destroy(id);
  }

  async getTextPost(id: number): Promise<TextPost> {
    return this.blogTextPostRepository.findById(id);
  }

  async getTextPosts(): Promise<TextPost[]> {
    return this.blogTextPostRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateTextPost(id: number, dto: UpdateTextPostDto): Promise<TextPost> {
    throw new Error('Not implemented…');
  }

}
