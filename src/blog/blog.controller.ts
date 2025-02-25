import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateBlogDto } from './create-blog.dto';

@Controller('blog')
export class BlogController {
  @Post('store')
  create(@Body() createBlogDto: CreateBlogDto): string {
    return `This action adds a new blog with name:  ${createBlogDto?.description}`;
  }
  @Get()
  findAll(
    @Query('pageSize') pageSize: number = 30,
    @Query('pageNumber') pageNumber: number = 1,
  ): string {
    return `This action returns all blog with pageSize: ${pageSize} and pageNumber: ${pageNumber}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} blog`;
  }
}
