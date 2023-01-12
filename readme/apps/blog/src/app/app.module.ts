import { Module } from '@nestjs/common';
import { BlogTextPostModule } from './blog-post/text-post/blog-text-post.module';
import { BlogVideoPostModule } from './blog-post/video-post/blog-video-post.module';
import { BlogPhotoPostModule } from './blog-post/photo-post/blog-photo-post.module';
import { BlogLinkPostModule } from './blog-post/link-post/blog-link-post.module';
import { BlogStatusModule } from './blog-status/blog-status.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [PrismaModule, BlogStatusModule, BlogTextPostModule, BlogVideoPostModule, BlogPhotoPostModule, BlogLinkPostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
