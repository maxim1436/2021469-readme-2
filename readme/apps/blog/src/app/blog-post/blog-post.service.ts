import {BlogPostRepository} from './blog-post.repository';
import {CreatePostDto} from './dto/create-post.dto';
import {Post} from '@readme/shared-types';
import {BlogPostEntity} from './blog-post.entity';
import {UpdateTextPostDto} from './dto/update-text-post.dto';
import {Injectable} from '@nestjs/common';
import { PostQuery } from './query/post.query';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository,
  ) {}

  async createPost(dto: CreatePostDto): Promise<Post> {
    const postEntity = new BlogPostEntity({
      ...dto, comments: [], textPosts: [...dto.textPosts], videoPosts: [...dto.videoPosts],
      photoPosts: [...dto.photoPosts], linkPosts: [...dto.linkPosts]
    });
    return this.blogPostRepository.create(postEntity);
  }

  async deletePost(id: number): Promise<void> {
    this.blogPostRepository.destroy(id);
  }

  async getPost(id: number): Promise<Post> {
    return this.blogPostRepository.findById(id);
  }

  async getPosts(query: PostQuery): Promise<Post[]> {
    return this.blogPostRepository.find(query);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updatePost(id: number, dto: UpdateTextPostDto): Promise<Post> {
    throw new Error('Not implemented…');
  }

}
