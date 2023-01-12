import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BlogLinkPostService } from './blog-link-post.service';
import { fillObject } from '@readme/core';
import { LinkPostRdo } from './rdo/link-post.rdo';
import { CreateLinkPostDto } from './dto/create-link-post.dto';
import {UpdateLinkPostDto} from './dto/update-link-post.dto';

@Controller('link-posts')
export class BlogLinkPostController {
  constructor(
    private readonly blogLinkPostService: BlogLinkPostService
  ) {}

  @Get('/:id')
  async show(@Param('id') id: string) {
    const linkPostId = parseInt(id, 10);
    const linkPost = await this.blogLinkPostService.getLinkPost(linkPostId);
    return fillObject(LinkPostRdo, linkPost);
  }

  @Get('/')
  async index() {
    const linkPosts = await this.blogLinkPostService.getLinkPosts();
    return fillObject(LinkPostRdo, linkPosts);
  }

  @Post('/')
  async create(@Body() dto: CreateLinkPostDto) {
    const newLinkPost = await this.blogLinkPostService.createLinkPost(dto);
    return fillObject(LinkPostRdo, newLinkPost);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const linkPostId = parseInt(id, 10);
    this.blogLinkPostService.deleteLinkPost(linkPostId);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: UpdateLinkPostDto) {
    const postId = parseInt(id, 10);
    const updatedLinkPost = await this.blogLinkPostService.updateLinkPost(postId, dto);
    return fillObject(LinkPostRdo, updatedLinkPost)
  }
}
