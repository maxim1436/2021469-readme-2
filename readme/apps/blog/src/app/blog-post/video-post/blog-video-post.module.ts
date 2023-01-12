import { Module } from '@nestjs/common';
import { BlogVideoPostRepository } from './blog-video-post.repository';
import { BlogVideoPostService } from './blod-video-post.service';
import { BlogVideoPostController } from './blog-video-post.controller';


@Module({
  imports: [],
  controllers: [BlogVideoPostController],
  providers: [BlogVideoPostService, BlogVideoPostRepository],
})
export class BlogVideoPostModule {}
