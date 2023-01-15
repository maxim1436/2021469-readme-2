import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@readme/core';
import { User } from '@readme/shared-types';
import * as crypto from 'crypto';
import { BlogUserEntity } from './blog-user.entity';

@Injectable()
export class BlogUserMemoryRepository implements CRUDRepository<BlogUserEntity, string, User> {

  private repository: {[key: string]: User} = {};

  public async create(item: BlogUserEntity): Promise<User> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;

    return {...entry};
  }

  public async findById(id: string): Promise<User> {

      if (this.repository[id]) {
        return {...this.repository[id]}
      }

      return null;
    }

  public async findByEmail(email: string) {
    const existUser = Object.values(this.repository)
      .find((userItem) => userItem.email === email);

    if(!existUser) {
      return null;
    }

    return {...existUser};
  }


  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: BlogUserEntity): Promise<User> {
    this.repository[id] = {...item.toObject(), _id: id};
    return this.findById(id);
  }

}
