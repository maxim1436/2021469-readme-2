import { CRUDRepository } from '@readme/core';
import { BlogPostEntity } from './blog-post.entity';
import { Post } from '@readme/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PostQuery } from './query/post.query';

@Injectable()
export class BlogPostRepository implements CRUDRepository<BlogPostEntity, number, Post> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: BlogPostEntity): Promise<Post> {
    const entityData = item.toObject();
    return this.prisma.post.create({
      data: {
        ...entityData,
        comments: {
          connect: []
        },
        textPosts: {
          create: [...item.textPosts]
        },
        videoPosts: {
          create: [...item.videoPosts]
        },
        photoPosts: {
          create: [...item.photoPosts]
        },
        linkPosts: {
          create: [...item.linkPosts]
        },
      },
      include: {
        comments: true,
        linkPosts: true,
        photoPosts: true,
        textPosts: true,
        videoPosts: true,
      }
    });
  }
  public async destroy(id: number): Promise<void> {
    await this.prisma.post.update({
      where: {
        id
      },
      data: {
        textPosts: {
          deleteMany: {},
        },
        photoPosts: {
          deleteMany: {},
        },
        videoPosts: {
          deleteMany: {},
        },
        linkPosts: {
          deleteMany: {},
        },
        comments: {
          deleteMany: {},
        }
      },
      include: {
        comments: true,
        linkPosts: true,
        photoPosts: true,
        textPosts: true,
        videoPosts: true,
      }
    });
    await this.prisma.post.delete({
      where: {
        id
      },
    });
  }

  public async findById(id: number): Promise<Post | null> {
    return this.prisma.post.findFirst({
      where: {
        id
      },
      include: {
        comments: true,
        linkPosts: true,
        photoPosts: true,
        textPosts: true,
        videoPosts: true,
      }
    });
  }

  public find({limit, sortDirection, page}: PostQuery): Promise<Post[]> {
    return this.prisma.post.findMany({
      take: limit,
      include: {
        comments: true,
        linkPosts: true,
        photoPosts: true,
        textPosts: true,
        videoPosts: true,
      },
      orderBy: [
        {
          createdAt: sortDirection
        }
      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });

  }

  public update(id: number, item: BlogPostEntity): Promise<Post> {
    return Promise.resolve(undefined);
  }

}

