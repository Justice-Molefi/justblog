import { PostDto } from "@/app/dto/PostDto";

export async function createPost(PostDto: PostDto){
    const title = PostDto.title;
    const content = PostDto.content;
    const tags = PostDto.tags;
    
}