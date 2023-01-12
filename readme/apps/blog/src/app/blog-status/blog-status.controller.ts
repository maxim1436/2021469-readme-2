import { Body, Post, Controller, Delete, Param, HttpCode, HttpStatus, Get, Patch } from '@nestjs/common';
import { BlogStatusService } from './blog-status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { fillObject } from '@readme/core';
import { StatusRdo } from './rdo/status.rdo';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('status')
export class BlogStatusController {
  constructor(
    private readonly blogStatusService: BlogStatusService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const statusId = parseInt(id, 10);
    const existStatus = await this.blogStatusService.getStatus(statusId);
    return fillObject(StatusRdo, existStatus);
  }

  @Get('/')
  async index() {
    const statuses = await this.blogStatusService.getStatuses();
    return fillObject(StatusRdo, statuses);
  }

  @Post('/')
  async create(@Body() dto: CreateStatusDto) {
    const newStatus = await this.blogStatusService.createStatus(dto);
    return fillObject(StatusRdo, newStatus);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const statusId = parseInt(id, 10);
    this.blogStatusService.deleteStatus(statusId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateStatusDto) {
    const statusId = parseInt(id, 10);
    const updatedStatus = await this.blogStatusService.updateStatus(statusId, dto)
    return fillObject(StatusRdo, updatedStatus);
  }
}
