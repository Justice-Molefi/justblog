'use server'

import { PostDto } from "@/app/dto/PostDto";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(PostDto: PostDto) {
  const title = PostDto.title;
  const content = PostDto.content;
  const tags = PostDto.tags;
}

export async function updatePost(PostDto: PostDto) {
  const title = PostDto.title;
  const content = PostDto.content;
  const tags = PostDto.tags;
}

export async function deletePost(PostDto: PostDto) {
  const title = PostDto.title;
  const content = PostDto.content;
  const tags = PostDto.tags;
}

export async function publishPost(PostDto: PostDto) {
  const title = PostDto.title;
  const content = PostDto.content;
  const tags = PostDto.tags;
}

export async function login(formData: FormData) : Promise<string> {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email && !password) return "something went wrong 😣";

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if(error){
    console.log(error.message)
    return "something went wrong 🤕";
  }

  revalidatePath('/', 'layout');
  redirect('/');
}


export async function logout(){
    const supabase = await createClient();
    supabase.auth.signOut();
    revalidatePath('/', 'layout');
    redirect('/')
}