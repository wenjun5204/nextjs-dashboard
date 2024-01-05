/*
 * @Author: regan regan@douyu.tv
 * @Date: 2024-01-04 21:46:14
 * @LastEditors: regan
 * @Description: file content
 */
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
