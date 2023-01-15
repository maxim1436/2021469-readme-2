import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { BlogVideoPostService } from './blod-video-post.service';
import { fillObject } from '@readme/core';
import { VideoPostRdo } from './rdo/video-post.rdo';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import {UpdateVideoPostDto} from './dto/update-video-post.dto';
import { PostQuery } from '../query/post.query';

@Controller('video-posts')
export class BlogVideoPostController {
  constructor(
    private readonly blogVideoPostService: BlogVideoPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: number) {
    const videoPost = await this.blogVideoPostService.getVideoPost(id);
    return fillObject(VideoPostRdo, videoPost);
  }

  @Get('/')
  async index(@Query () query: PostQuery) {
    const videoPosts = await this.blogVideoPostService.getVideoPosts(query);
    return fillObject(VideoPostRdo, videoPosts);
  }

  @Post('/')
  async create(@Body() dto: CreateVideoPostDto) {
    const newVideoPost = await this.blogVideoPostService.createVideoPost(dto);
    return fillObject(VideoPostRdo, newVideoPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: number) {
    this.blogVideoPostService.deleteVideoPost(id);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() dto: UpdateVideoPostDto) {
    const updatedVideoPost = await this.blogVideoPostService.updateVideoPost(id, dto);
    return fillObject(VideoPostRdo, updatedVideoPost)
  }
}
