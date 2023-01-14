import {BlogLinkPostRepository} from './blog-link-post.repository';
import {CreateLinkPostDto} from './dto/create-link-post.dto';
import {LinkPost} from '@readme/shared-types';
import {BlogLinkPostEntity} from './blog-link-post.entity';
import {UpdateLinkPostDto} from './dto/update-link-post.dto';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BlogLinkPostService {
  constructor(
    private readonly blogLinkPostRepository: BlogLinkPostRepository,
  ) {}

  async createLinkPost(dto: CreateLinkPostDto): Promise<LinkPost> {
    const linkPostEntity = new BlogLinkPostEntity({ ...dto, comments:[]});
    return this.blogLinkPostRepository.create(linkPostEntity);
  }

  async deleteLinkPost(id: number): Promise<void> {
    this.blogLinkPostRepository.destroy(id);
  }

  async getLinkPost(id: number): Promise<LinkPost> {
    return this.blogLinkPostRepository.findById(id);
  }

  async getLinkPosts(): Promise<LinkPost[]> {
    return this.blogLinkPostRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateLinkPost(id: number, dto: UpdateLinkPostDto): Promise<LinkPost> {
    throw new Error('Not implemented…');
  }

}
