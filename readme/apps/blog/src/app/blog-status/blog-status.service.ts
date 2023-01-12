import { Status } from '@readme/shared-types';
import { Injectable } from '@nestjs/common';
import { BlogStatusRepository } from './blog-status.repository';
import { CreateStatusDto } from './dto/create-status.dto';
import { BlogStatusEntity } from './blog-status.entity';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class BlogStatusService {
  constructor(
    private readonly blogStatusRepository: BlogStatusRepository
  ) {}

  async createStatus(dto: CreateStatusDto): Promise<Status> {
    const statusEntity = new BlogStatusEntity(dto);
    return this.blogStatusRepository.create(statusEntity);
  }

  async deleteStatus(id: number): Promise<void> {
    this.blogStatusRepository.destroy(id);
  }

  async getStatus(id: number): Promise<Status> {
    return this.blogStatusRepository.findById(id);
  }

  async getStatuses(): Promise<Status[]> {
    return this.blogStatusRepository.find();
  }

  async updateStatus(id: number, dto: UpdateStatusDto): Promise<Status> {
    return this.blogStatusRepository.update(id, new BlogStatusEntity(dto));
  }
}
