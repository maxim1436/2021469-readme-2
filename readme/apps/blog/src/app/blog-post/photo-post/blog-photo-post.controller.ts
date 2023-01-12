import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BlogPhotoPostService } from './blog-photo-post.service';
import { fillObject } from '@readme/core';
import { PhotoPostRdo } from './rdo/photo-post.rdo';
import { CreatePhotoPostDto } from './dto/create-photo-post.dto';
import {UpdatePhotoPostDto} from './dto/update-photo-post.dto';

@Controller('photo-posts')
export class BlogPhotoPostController {
  constructor(
    private readonly blogPhotoPostService: BlogPhotoPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const photoPostId = parseInt(id, 10);
    const photoPost = await this.blogPhotoPostService.getPhotoPost(photoPostId);
    return fillObject(PhotoPostRdo, photoPost);
  }

  @Get('/')
  async index() {
    const photoPosts = await this.blogPhotoPostService.getPhotoPosts();
    return fillObject(PhotoPostRdo, photoPosts);
  }

  @Post('/')
  async create(@Body() dto: CreatePhotoPostDto) {
    const newPhotoPost = await this.blogPhotoPostService.createPhotoPost(dto);
    return fillObject(PhotoPostRdo, newPhotoPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const photoPostId = parseInt(id, 10);
    this.blogPhotoPostService.deletePhotoPost(photoPostId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdatePhotoPostDto) {
    const postId = parseInt(id, 10);
    const updatedPhotoPost = await this.blogPhotoPostService.updatePhotoPost(postId, dto);
    return fillObject(PhotoPostRdo, updatedPhotoPost)
  }
}
