/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-04 18:05:34
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '单据', href: '/dashboard/invoices' },
          {
            label: '创建单据',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}