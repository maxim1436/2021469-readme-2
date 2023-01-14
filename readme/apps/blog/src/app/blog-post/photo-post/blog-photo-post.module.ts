import { Module } from '@nestjs/common';
import { BlogPhotoPostRepository } from './blog-photo-post.repository';
import { BlogPhotoPostService } from './blog-photo-post.service';
import { BlogPhotoPostController } from './blog-photo-post.controller';


@Module({
  imports: [],
  controllers: [BlogPhotoPostController],
  providers: [BlogPhotoPostService, BlogPhotoPostRepository],
})
export class BlogPhotoPostModule {}
