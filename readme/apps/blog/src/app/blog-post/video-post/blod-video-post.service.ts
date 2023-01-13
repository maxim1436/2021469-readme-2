import {BlogVideoPostRepository} from './blog-video-post.repository';
import {CreateVideoPostDto} from './dto/create-video-post.dto';
import {VideoPost} from '@readme/shared-types';
import {BlogVideoPostEntity} from './blog-video-post.entity';
import {UpdateVideoPostDto} from './dto/update-video-post.dto';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BlogVideoPostService {
  constructor(
    private readonly blogVideoPostRepository: BlogVideoPostRepository,
  ) {}

  async createVideoPost(dto: CreateVideoPostDto): Promise<VideoPost> {
    const VideoPostEntity = new BlogVideoPostEntity({ ...dto, comments: []});
    return this.blogVideoPostRepository.create(VideoPostEntity);
  }

  async deleteVideoPost(id: number): Promise<void> {
    this.blogVideoPostRepository.destroy(id);
  }

  async getVideoPost(id: number): Promise<VideoPost> {
    return this.blogVideoPostRepository.findById(id);
  }

  async getVideoPosts(): Promise<VideoPost[]> {
    return this.blogVideoPostRepository.find();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateVideoPost(id: number, dto: UpdateVideoPostDto): Promise<VideoPost> {
    throw new Error('Not implemented…');
  }

}
