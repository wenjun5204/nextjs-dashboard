/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-17 19:34:47
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from '@radix-ui/react-icons';
import { addDays, format } from 'date-fns';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const FormSchema = z.object({
  dob: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  username: z.string().min(1, { message: 'A username is required' }),
});

export function TableSearchForm() {
  const [date, setDate] = useState<any>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(66, data);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className='flex items-center'>
              <FormLabel>请输入查询名称： </FormLabel>
              <FormControl>
                <Input placeholder="shadcn" className=' w-[300px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => {
            const date = field.value || {};
            return (
              <FormItem className="">
                <FormLabel>请选择日期：</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={'outline'}
                      className={cn(
                        'w-[300px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, 'LLL dd, y')} -{' '}
                            {format(date.to, 'LLL dd, y')}
                          </>
                        ) : (
                          format(date.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      // defaultMonth={date?.from}
                      selected={field.value as DateRange}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>{/* 可以选. */}</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
