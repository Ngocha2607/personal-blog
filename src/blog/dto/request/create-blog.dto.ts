import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsBoolean()
  isPublic: boolean;
  @IsString()
  image: string;
  @IsString()
  category: string;
  @IsArray()
  tags: string[];
}
