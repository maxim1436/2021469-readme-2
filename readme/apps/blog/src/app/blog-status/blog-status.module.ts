import { Module } from '@nestjs/common';
import { BlogStatusService } from './blog-status.service';
import { BlogStatusRepository } from './blog-status.repository';
import { BlogStatusController } from './blog-status.controller';

@Module({
  imports: [],
  controllers: [BlogStatusController],
  providers: [BlogStatusService, BlogStatusRepository],
  exports: [BlogStatusRepository]
})
export class BlogStatusModule {}
