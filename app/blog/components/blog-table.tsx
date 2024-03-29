
import React from 'react';
import DataTable from '@/components/data-table/page';
import { fetchBlogList, fetchFilteredInvoices } from '@/app/lib/data';
import { columns } from './column';

export default async function BlogTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const blogs = await fetchBlogList(query, currentPage || 10, 10000);
  // console.log(666, blogs)
  return <DataTable data={blogs} columns={columns}/>;
}
