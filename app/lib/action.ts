'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// ...

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

//创建
export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  console.log(123, customerId, amount, status, date);

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// 删除
export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

// 验证
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return '账号密码错误.';
        default:
          return '登录失败.';
      }
    }
    throw error;
  }
}

//创建用户
export async function createUser(_: any, formData: FormData) {
  const ss = await bcrypt.hash('666666', 10);
  console.log('666s', _, formData);
  try {
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${'liuwenjun'}, ${'regan@gmail.com'}, ${ss})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  // return { message: 'User Created.' };
}

//创建新一片博客
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
