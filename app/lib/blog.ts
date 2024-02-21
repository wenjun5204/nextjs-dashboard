'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';
//创建一篇博客
export async function createBlog(params: any) {
    const { title, content, blogImg, tags } = params || {};
    const date = new Date().toISOString().split('T')[0];
  
    const author_id = '410544b2-4001-4271-9855-fec4b6a6442a';
    const author = 'User';
    // console.log(title, content, author_id, author, date, tags, blogImg);
    try {
      await sql`
      INSERT INTO blogs (title, content, author_id, author, publish_date, update_date, tags, views, likes, blog_img)
      VALUES (${title}, ${content}, ${author_id}, ${author}, ${date}, ${date}, ${tags}, ${0}, ${0}, ${blogImg})
    `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Blog.',
      };
    }
  
    revalidatePath('/blog');
    redirect('/blog');
  }
  
  // 更新博客的信息
  export async function updateBlogById(id: string, params: any) {
    const { title, content, blogImg, tags } = params || {};
    const date = new Date().toISOString().split('T')[0];
  
    const author_id = '410544b2-4001-4271-9855-fec4b6a6442a';
    const author = 'User';
    // console.log(title, content, author_id, author, date, tags, blogImg);
    try {
      await sql`
          UPDATE blogs
          SET title = ${title}, content = ${content}, blog_img = ${blogImg}, tags = ${tags}, update_date = ${date}
          WHERE id = ${id}
        `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Update Blog.',
      };
    }
  
    revalidatePath('/blog');
    redirect('/blog');
  }