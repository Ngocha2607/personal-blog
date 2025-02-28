import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateBlogDto } from './dto/request/create-blog.dto';
import { UpdateBlogDto } from './dto/request/update-blog.dto';
import { BlogService } from './blog.service';
import { BlogDto } from 'src/blog/interface/blog.interface';
import { Roles } from 'src/roles/roles.decorator';
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Post('store')
  @Roles(['admin'])
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
  findOne(@Param('id', ParseIntPipe) id: number): BlogDto | undefined {
    return this.blogService.findOne(id);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBlogDto: UpdateBlogDto,
  ): string {
    this.blogService.update(id, updateBlogDto);
    return `This action updates a #${id} blog`;
  }
  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number): void {
    this.blogService.delete(id);
  }
}
