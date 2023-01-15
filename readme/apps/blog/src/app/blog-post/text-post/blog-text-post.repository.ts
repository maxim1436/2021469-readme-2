import { CRUDRepository } from '@readme/core';
import { BlogTextPostEntity } from './blog-text-post.entity';
import { TextPost } from '@readme/shared-types';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PostQuery } from '../query/post.query';

@Injectable()
export class BlogTextPostRepository implements CRUDRepository<BlogTextPostEntity, number, TextPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogTextPostEntity): Promise<TextPost> {
    const entityData = item.toObject();
    return this.prisma.text_Post.create({
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
    await this.prisma.text_Post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<TextPost | null> {
    return this.prisma.text_Post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
      }
    });
  }

  public find({limit, sortDirection, page}: PostQuery): Promise<TextPost[]> {
    return this.prisma.text_Post.findMany({
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
  public update(id: number, item: BlogTextPostEntity): Promise<TextPost> {
    return Promise.resolve(undefined);
  }

}
