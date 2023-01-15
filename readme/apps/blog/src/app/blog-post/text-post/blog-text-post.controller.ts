import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { BlogTextPostService } from './blog-text-post.service';
import { fillObject } from '@readme/core';
import { TextPostRdo } from './rdo/text-post.rdo';
import { CreateTextPostDto } from './dto/create-text-post.dto';
import {UpdateTextPostDto} from './dto/update-text-post.dto';
import { PostQuery } from '../query/post.query';

@Controller('text-posts')
export class BlogTextPostController {
  constructor(
    private readonly blogTextPostService: BlogTextPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: number) {
    const existTextPost = await this.blogTextPostService.getTextPost(id);
    return fillObject(TextPostRdo, existTextPost);
  }

  @Get('/')
  async index(@Query () query: PostQuery) {
    const textPosts = await this.blogTextPostService.getTextPosts(query);
    return fillObject(TextPostRdo, textPosts);
  }

  @Post('/')
  async create(@Body() dto: CreateTextPostDto) {
    const newTextPost = await this.blogTextPostService.createTextPost(dto);
    return fillObject(TextPostRdo, newTextPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.blogTextPostService.deleteTextPost(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateTextPostDto) {
    const updatedTextPost = await this.blogTextPostService.updateTextPost(id, dto);
    return fillObject(TextPostRdo, updatedTextPost)
  }
}
