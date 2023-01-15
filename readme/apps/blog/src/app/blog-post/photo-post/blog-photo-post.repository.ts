import { CRUDRepository } from '@readme/core';
import { BlogPhotoPostEntity } from './blog-photo-post.entity';
import { PhotoPost } from '@readme/shared-types';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PostQuery } from '../query/post.query';

@Injectable()
export class BlogPhotoPostRepository implements CRUDRepository<BlogPhotoPostEntity, number, PhotoPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogPhotoPostEntity): Promise<PhotoPost> {
    const entityData = item.toObject();
    return this.prisma.photo_Post.create({
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
    await this.prisma.photo_Post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<PhotoPost | null> {
    return this.prisma.photo_Post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
      }
    });
  }

  public find({limit, sortDirection, page}: PostQuery): Promise<PhotoPost[]> {
    return this.prisma.photo_Post.findMany({
      take: limit,
      include: {
        comments: true,
      },
      orderBy: [
        {
          createdAt: sortDirection
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(id: number, item: BlogPhotoPostEntity): Promise<PhotoPost> {
    return Promise.resolve(undefined);
  }

}