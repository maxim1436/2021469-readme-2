import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BlogTextPostService } from './blog-text-post.service';
import { fillObject } from '@readme/core';
import { TextPostRdo } from './rdo/text-post.rdo';
import { CreateTextPostDto } from './dto/create-text-post.dto';
import {UpdateTextPostDto} from './dto/update-text-post.dto';

@Controller('text-posts')
export class BlogTextPostController {
  constructor(
    private readonly blogTextPostService: BlogTextPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const textPostId = parseInt(id, 10);
    const textPost = await this.blogTextPostService.getTextPost(textPostId);
    return fillObject(TextPostRdo, textPost);
  }

  @Get('/')
  async index() {
    const textPosts = await this.blogTextPostService.getTextPosts();
    return fillObject(TextPostRdo, textPosts);
  }

  @Post('/')
  async create(@Body() dto: CreateTextPostDto) {
    const newTextPost = await this.blogTextPostService.createTextPost(dto);
    return fillObject(TextPostRdo, newTextPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const textPostId = parseInt(id, 10);
    this.blogTextPostService.deleteTextPost(textPostId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateTextPostDto) {
    const postId = parseInt(id, 10);
    const updatedTextPost = await this.blogTextPostService.updateTextPost(postId, dto);
    return fillObject(TextPostRdo, updatedTextPost)
  }
}
