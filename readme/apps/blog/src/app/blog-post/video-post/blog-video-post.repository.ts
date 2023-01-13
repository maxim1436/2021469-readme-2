/* eslint-disable @typescript-eslint/no-unused-vars */
import { CRUDRepository } from '@readme/core';
import { BlogVideoPostEntity } from './blog-video-post.entity';
import { VideoPost } from '@readme/shared-types';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogVideoPostRepository implements CRUDRepository<BlogVideoPostEntity, number, VideoPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogVideoPostEntity): Promise<VideoPost> {
    const entityData = item.toObject();
    return this.prisma.video_Post.create({
      data: {
        ...entityData,
        comments: {
          connect: []
        }
      },
      include: {
        comments: true,
      }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.video_Post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<VideoPost | null> {
    return this.prisma.video_Post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
      }
    });
  }

  public find(): Promise<VideoPost[]> {
    return this.prisma.video_Post.findMany({
      include: {
        comments: true,
      }
    });
  }

  public update(id: number, item: BlogVideoPostEntity): Promise<VideoPost> {
    return Promise.resolve(undefined);
  }

}
