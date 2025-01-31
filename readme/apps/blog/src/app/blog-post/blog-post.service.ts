import {BlogPostRepository} from './blog-post.repository';
import {CreatePostDto} from './dto/create-post.dto';
import {UpdatePostDto} from './dto/update-post.dto';
import {Post} from '@readme/shared-types';
import {BlogPostEntity} from './blog-post.entity';
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

  async updatePost(id: number, dto: UpdatePostDto): Promise<Post> {
    return this.blogPostRepository.update(id, dto);
  }

}
