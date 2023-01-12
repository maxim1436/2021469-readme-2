import { CRUDRepository } from '@readme/core';
import { BlogLinkPostEntity } from './blog-link-post.entity';
import { LinkPost } from '@readme/shared-types';
import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogLinkPostRepository implements CRUDRepository<BlogLinkPostEntity, number, LinkPost> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogLinkPostEntity): Promise<LinkPost> {
    const entityData = item.toObject();
    return this.prisma.link_Post.create({
      data: {
        ...entityData,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.link_Post.delete({
      where: {
        id,
      }
    });
  }

  public async findById(id: number): Promise<LinkPost | null> {
    return this.prisma.link_Post.findFirst({
      where: {
        id
      },
    });
  }

  public find(): Promise<LinkPost[]> {
    return this.prisma.link_Post.findMany({});
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public update(id: number, item: BlogLinkPostEntity): Promise<LinkPost> {
    return Promise.resolve(undefined);
  }

}
