import { Injectable } from '@nestjs/common';
import { User } from '@readme/shared-types';
import * as dayjs from 'dayjs';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {}

  async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, avatar, registerDate} = dto;
    const blogUser: User = {
      _id: '', email, firstname, lastname, avatar, registerDate: dayjs(registerDate).toDate(),
      passwordHash: '', postsCount: 0, followersCount: 0,
    }

    const existUser = await this.blogUserRepository.findByEmail(email);

    if(existUser) {
      throw new Error('User already exists');
    }

    const userEntiry = await new BlogUserEntity(blogUser)
      .setPassword(password);

    return this.blogUserRepository.create(userEntiry);
  }

}
