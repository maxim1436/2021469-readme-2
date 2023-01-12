import { CRUDRepository } from '@readme/core';
import { BlogTextPostEntity } from './blog-text-post.entity';
import { TextPost } from '@readme/shared-types';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogTextPostRepository implements CRUDRepository<BlogTextPostEntity, number, TextPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogTextPostEntity): Promise<TextPost> {
    const entityData = item.toObject();
    return this.prisma.text_Post.create({
      data: {
        ...entityData,
      },
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
    });
  }

  public find(): Promise<TextPost[]> {
    return this.prisma.text_Post.findMany({});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(id: number, item: BlogTextPostEntity): Promise<TextPost> {
    return Promise.resolve(undefined);
  }

}
