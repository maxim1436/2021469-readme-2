import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
// import { BlogStatusModule } from './blog-status/blog-status.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [PrismaModule, BlogPostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
