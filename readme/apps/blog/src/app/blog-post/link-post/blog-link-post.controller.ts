// import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
// import { BlogLinkPostService } from './blog-link-post.service';
// import { fillObject } from '@readme/core';
// import { LinkPostRdo } from '../rdo/link-post.rdo';
// import { CreateLinkPostDto } from '../dto/create-link-post.dto';
// import {UpdateLinkPostDto} from './dto/update-link-post.dto';
// import { PostQuery } from '../query/post.query';

// @Controller('link-posts')
// export class BlogLinkPostController {
//   constructor(
//     private readonly blogLinkPostService: BlogLinkPostService
//   ) {}

//   @Get('/:id')
//   async show(@Param('id') id: number) {
//     const linkPost = await this.blogLinkPostService.getLinkPost(id);
//     return fillObject(LinkPostRdo, linkPost);
//   }

//   @Get('/')
//   async index(@Query () query: PostQuery) {
//     const linkPosts = await this.blogLinkPostService.getLinkPosts(query);
//     return fillObject(LinkPostRdo, linkPosts);
//   }

//   @Post('/')
//   async create(@Body() dto: CreateLinkPostDto) {
//     const newLinkPost = await this.blogLinkPostService.createLinkPost(dto);
//     return fillObject(LinkPostRdo, newLinkPost);
//   }

//   @Delete('/:id')
//   @HttpCode(HttpStatus.NO_CONTENT)
//   async destroy(@Param('id') id: number) {
//     this.blogLinkPostService.deleteLinkPost(id);
//   }

//   @Patch('/:id')
//   async update(@Param('id') id: number, @Body() dto: UpdateLinkPostDto) {
//     const updatedLinkPost = await this.blogLinkPostService.updateLinkPost(id, dto);
//     return fillObject(LinkPostRdo, updatedLinkPost)
//   }
// }
