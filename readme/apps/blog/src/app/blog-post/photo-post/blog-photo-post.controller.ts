// import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
// import { BlogPhotoPostService } from './blog-photo-post.service';
// import { fillObject } from '@readme/core';
// import { PhotoPostRdo } from '../rdo/photo-post.rdo';
// import { CreatePhotoPostDto } from '../dto/create-photo-post.dto';
// import {UpdatePhotoPostDto} from './dto/update-photo-post.dto';
// import { PostQuery } from '../query/post.query';

// @Controller('photo-posts')
// export class BlogPhotoPostController {
//   constructor(
//     private readonly blogPhotoPostService: BlogPhotoPostService
//   ) {}

//   @Get('/:id')
//   async show(@Param('id') id: number) {
//     const photoPost = await this.blogPhotoPostService.getPhotoPost(id);
//     return fillObject(PhotoPostRdo, photoPost);
//   }

//   @Get('/')
//   async index(@Query () query: PostQuery) {
//     const photoPosts = await this.blogPhotoPostService.getPhotoPosts(query);
//     return fillObject(PhotoPostRdo, photoPosts);
//   }

//   @Post('/')
//   async create(@Body() dto: CreatePhotoPostDto) {
//     const newPhotoPost = await this.blogPhotoPostService.createPhotoPost(dto);
//     return fillObject(PhotoPostRdo, newPhotoPost);
//   }

//   @Delete('/:id')
//   @HttpCode(HttpStatus.NO_CONTENT)
//   async destroy(@Param('id') id: number) {
//     this.blogPhotoPostService.deletePhotoPost(id);
//   }

//   @Patch('/:id')
//   async update(@Param('id') id: number, @Body() dto: UpdatePhotoPostDto) {
//     const updatedPhotoPost = await this.blogPhotoPostService.updatePhotoPost(id, dto);
//     return fillObject(PhotoPostRdo, updatedPhotoPost)
//   }
// }
