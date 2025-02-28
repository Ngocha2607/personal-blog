import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BlogDto } from 'src/blog/interface/blog.interface';
import { CreateBlogDto } from './dto/request/create-blog.dto';
import { UpdateBlogDto } from './dto/request/update-blog.dto';

@Injectable()
export class BlogService {
  private readonly blogs: BlogDto[] = [];

  create(blog: CreateBlogDto) {
    const id = this.blogs.length + 1;
    const newBlog = { id, ...blog };
    this.blogs.push(newBlog);
  }

  findAll(): BlogDto[] {
    return this.blogs;
  }

  findOne(id: number): BlogDto | undefined {
    return this.blogs.find((blog) => blog.id === id);
  }

  update(id: number, blog: UpdateBlogDto) {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    const updatedBlog = { id, ...blog };
    this.blogs[index] = updatedBlog;
  }

  delete(id: number) {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    this.blogs.splice(index, 1);
  }
}
