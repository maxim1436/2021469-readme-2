// import { CRUDRepository } from '@readme/core';
// import { BlogStatusEntity } from './blog-status.entity';
// import { Status } from '@readme/shared-types';
// import { PrismaService } from '../prisma/prisma.service';
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class BlogStatusRepository implements CRUDRepository<BlogStatusEntity, number, Status> {
//   constructor(private readonly prisma: PrismaService) {}

//   public async create(item: BlogStatusEntity): Promise<Status> {
//     return this.prisma.status.create({
//       data: { ...item.toObject() }
//     });
//   }

//   public async destroy(id: number): Promise<void> {
//     await this.prisma.status.delete({
//       where: {
//        id,
//       }
//     });
//   }

//   public findById(id: number): Promise<Status | null> {
//     return this.prisma.status.findFirst({
//       where: {
//         id
//       }
//     });
//   }

//   public find(ids: number[] = []): Promise<Status[]> {
//     return this.prisma.status.findMany({
//       where: {
//         id: {
//           in: ids.length > 0 ? ids : undefined
//         }
//       }
//     });
//   }

//   public update(id: number, item: BlogStatusEntity): Promise<Status> {
//     return this.prisma.status.update({
//       where: {
//         id
//       },
//       data: { ...item.toObject(), id}
//     });
//   }
// }
