import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBlogDto } from './request/create-blog.dto';
import { UpdateBlogDto } from './request/update-blog.dto';
import { BlogService } from './blog.service';
import { BlogDto } from 'src/interfaces/blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('store')
  create(@Body() createBlogDto: CreateBlogDto): string {
    this.blogService.create(createBlogDto);
    return `This action adds a new blog with name:  ${createBlogDto?.name}`;
  }
  @Get()
  findAll(
    @Query('pageSize') pageSize: number = 30,
    @Query('pageNumber') pageNumber: number = 1,
  ): BlogDto[] {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): BlogDto | undefined {
    return this.blogService.findOne(Number(id));
  }

  @Put('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateBlogDto: UpdateBlogDto,
  ): string {
    this.blogService.update(Number(id), updateBlogDto);
    return `This action updates a #${id} blog`;
  }
  @Delete('delete/:id')
  delete(@Param('id') id: string): void {
    this.blogService.delete(Number(id));
  }
}
