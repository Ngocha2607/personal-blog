export class CreateBlogDto {
  name: string;
  description: string;
  isPublic: boolean;
  image: string;
  category: string;
  tags: string[];
}
