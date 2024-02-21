'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// import * as commands from "@uiw/react-md-editor/commands"

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createBlog, updateBlogById } from '@/app/lib/blog';
import { tag } from '../constant';

const formSchema = z.object({
  blogTitle: z.string().min(2, {
    message: '标题至少是两个字符.',
  }),
  content: z.string().min(2, {
    message: '内容至少是两个字符.',
  }),
  blogImg: z.string().min(0, {
    message: '首页图片.',
  }),
  tags: z.string(),
});

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

export function BlogForm(props: { mode?: string; blog?: any }) {
  const { mode, blog } = props;
  const { title: blogTitle, blog_img: blogImg, content, tags } = blog || {};

  // console.log(666, blog);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogTitle: blogTitle || '',
      content: content || '**Hello world!!!**',
      blogImg: blogImg || '',
      tags: tags || '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(666, values);
    if (mode === 'edit') {
      updateBlogById(blog?.id, { ...values, title: values?.blogTitle });
    } else {
      createBlog({ ...values, title: values?.blogTitle });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="blogTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>文章标题</FormLabel>
              <FormControl>
                <Input placeholder="such as" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="blogImg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>首图</FormLabel>
              <FormControl>
                <Input placeholder="such as" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>文章内容</FormLabel>
              <FormControl className=" h-200">
                <MDEditor {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>文章Tag</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="标签" />
                  </SelectTrigger>
                  <SelectContent>
                    {(tag || []).map((item)=>{
                      return (
                        <SelectGroup key={item}>
                          {/* <SelectLabel>{item}</SelectLabel> */}
                          <SelectItem value={item}>{item}</SelectItem>
                        </SelectGroup>
                      );
                    })}
                    {/* <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem> */}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">提交</Button>
      </form>
    </Form>
  );
}
