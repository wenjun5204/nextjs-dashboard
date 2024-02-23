import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { BlogsTable } from '@/app/lib/definitions';

export const GET = async (req: Request) => {
  const newCurrentPage = 1;
  const newPageSize = 12;
  const offset = (newCurrentPage - 1) * newPageSize;
  // 前端自带分页
//   console.log(666, req)
  try {
    const poetrys = await sql<BlogsTable>`
        SELECT
          *
        FROM poetry
        LIMIT ${newPageSize} OFFSET ${offset}
      `;

    //   return blogs.rows;

    return NextResponse.json({
      success: true,
      errorMessage: 'success',
      data: poetrys.rows || [],
    });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch blogs.');
  }
};
