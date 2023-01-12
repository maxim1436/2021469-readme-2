import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BlogVideoPostService } from './blod-video-post.service';
import { fillObject } from '@readme/core';
import { VideoPostRdo } from './rdo/video-post.rdo';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import {UpdateVideoPostDto} from './dto/update-video-post.dto';

@Controller('video-posts')
export class BlogVideoPostController {
  constructor(
    private readonly blogVideoPostService: BlogVideoPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const videoPostId = parseInt(id, 10);
    const videoPost = await this.blogVideoPostService.getVideoPost(videoPostId);
    return fillObject(VideoPostRdo, videoPost);
  }

  @Get('/')
  async index() {
    const videoPosts = await this.blogVideoPostService.getVideoPosts();
    return fillObject(VideoPostRdo, videoPosts);
  }

  @Post('/')
  async create(@Body() dto: CreateVideoPostDto) {
    const newVideoPost = await this.blogVideoPostService.createVideoPost(dto);
    return fillObject(VideoPostRdo, newVideoPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const videoPostId = parseInt(id, 10);
    this.blogVideoPostService.deleteVideoPost(videoPostId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateVideoPostDto) {
    const postId = parseInt(id, 10);
    const updatedVideoPost = await this.blogVideoPostService.updateVideoPost(postId, dto);
    return fillObject(VideoPostRdo, updatedVideoPost)
  }
}
